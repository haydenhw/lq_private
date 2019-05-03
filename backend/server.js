var express = require('express'),
    cors = require('cors'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),

    //Handle Bars Templates
    exphbs = require('express-handlebars'),

    //Login
    expressValidator = require('express-validator'),
    flash = require('connect-flash'),
    session = require('express-session');
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy,

    UserReactionsAssets = require('./lib/user-assets'),

    //Mongo Database
    mongo = require('mongodb'),
    mongoose = require('mongoose'),

    print = require('./utility/print'),
    //Init App
    app = express();

var fs = require('fs');
var logger = require('./utility/logger');

var gPortNum = 8888;

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// not much more than these!!!

var dosisMods = JSON.parse(fs.readFileSync("./models/dosisMods.json").toString());
global.dosisMods = dosisMods;

global.IamCloud = false
if ( (process.argv.length > 2) && (process.argv[2] == 'cloud') ) {
    global.IamCloud = true
}


if ( (process.argv.length > 2) && (process.argv[process.argv.length-1].substr(0,4) == 'port')  ) {
    gPortNum = parseInt(process.argv[process.argv.length-1].substr(5));
    console.log(gPortNum)
}



global.gUserAssets = {}  // all modules that we are using in this application or web page for that matter.
                         // Has to be loaded first, it is in the document store.
global.gReactionsToUser = [];
//
global.UserReactionsAssets = UserReactionsAssets;
global.subst = (a,b,c) => {
    //
    var tmp = a.replace(b,c);
    while ( tmp !== a ) {
        a = tmp;
        tmp =  a.replace(b,c);
    }
    return(a);
}

global.ensureAuthenticated = (req, res, next) => {

    if ( req.isAuthenticated() ) {
      return next();
    } else if (req.get('client') === 'vue-client') {
        res.json({ message: 'NOT_AUTHORIZED'});
    } else {
        // req.flash('error', 'Not logged in');
        res.redirect('/users/login');
    }
}

var cloudServer = "18.217.16.238";
global.gInfluxUrl = "18.217.16.238";


if ( !IamCloud ) {
    // at the moment this is one way....
    const WebSocket = require('ws');
    var gWsServer = `ws://${cloudServer}:8282`

    var gHModuleWS = null;

    try {
        console.log("connecting to " + gWsServer);
        gHModuleWS = new WebSocket(gWsServer);
        gHModuleWS.on('open', () => {
                          console.log("connect made " + gWsServer)
                      });
        gHModuleWS.on('message', (data) => {});
        gHModuleWS.on('error',(e) => {
                          if (!process.env.OFFSITE_DEV) {
                            console.log(e)
                          }
                      })
    } catch (e) {
        console.log("no ws connection")
    }

    global.forwardHardwareMessage = (mobj) => {
        var msgStr = JSON.stringify((mobj));
        if ( gHModuleWS && (gHModuleWS.readyState == 1) ) {
            gHModuleWS.send(msgStr);
        }
    }

} else {
    global.forwardHardwareMessage = (mobj) => {}
}


// --------------------------------------------------------------------
// --------------------------------------------------------------------


var gooseOptions = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
};

//Mongo Connection
mongoose.Promise = global.Promise;

if (process.env.NODE_ENV === 'local') {
  console.log('** Using local mongo database **');
  mongoose.connect(`mongodb://localhost:27017/loginark`, gooseOptions);
} else {
  mongoose.connect(`mongodb://${cloudServer}/loginark`, gooseOptions);
}

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Index and Users Routes
var index = require('./routes/index').index;
var cloud = require('./routes/cloud');
var users = require('./routes/users');
var modules = require('./routes/modules');

var server = require('http').createServer(app);
var io = require('socket.io')(server);



index.setSocketIo(io)
//

//Set Handlebars view engine
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));

//Set Public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/vue', express.static('dist'));

app.use(cors({
  origin: [
    "http://localhost:8080",
    "http://10.0.0.86:8080",
    "http://192.168.43.64:8080",
    "http://192.168.1.99:8080",
    "http://192.168.1.53:8080",
    "http://mush.local:8080",
    "http://lq.local:8080",
  ],
  credentials: true,
  allowedHeaders: ['Content-Type', 'client'],
}));

//BodyParser/CookieParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Express Session Middleware
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

//Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Logging
app.use(require('morgan')('combined', { 'stream': logger.stream }));

const logHttpRequests = (req, res, next) => {
  if (!req.body.password) {
    logger.info(req.body);
  }

  next();
};

app.use(logHttpRequests);

//Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

//Connect Flash
app.use(flash());

//Global Variables

app.use(function (req, res, next){

  var flashError = req.flash('error');
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = flashError;
  res.locals.user = req.user || null;
  // Gives endpoints access to flash error
  req.flashError = flashError;
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/modules', modules);

app.get('/vue/*', (req, res) => {
  res.redirect('/vue');
});

//Server connection
server.listen(gPortNum, () => {
  console.log(`Server Started on Port ${gPortNum}`);
});
