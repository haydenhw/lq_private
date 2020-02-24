const express = require('express');
const router = express.Router();
var User = require('../models/user');
const { loadRootAssets } = require('./index');

router.get('/', ensureAuthenticated, async (req, res) => {
    // For this branch we don't care which user is logged in. Any user id will do
    const { _id } = await User.findOne({}).exec();
    loadRootAssets(_id, null, res);
});

module.exports = router;
