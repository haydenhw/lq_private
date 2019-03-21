const express = require('express');
const router = express.Router();
const { loadRootAssets } = require('./index');
var print = require('../utility/print');

router.get('/', ensureAuthenticated, (req, res) => {
    const { id } = req.user;

    print('hello hello hello')

    const testUserId = '5c4acda5cab072313a1f7ad5';
    const mockRes = { json () {}, render () {} };
    //  FOR TEST PURPOSE ONLY !!

    // loadRootAssets(testUserId, 'trigger!', mockRes);
    loadRootAssets(id, null, res);
});

module.exports = router;