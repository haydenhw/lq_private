const express = require('express');
const router = express.Router();
const { loadRootAssets } = require('./index');

router.get('/', ensureAuthenticated, (req, res) => {
    // const { id } = req.user;
    const id = '5d181d20cde99fadc00f4f30';
    loadRootAssets(id, null, res);
});

module.exports = router;
