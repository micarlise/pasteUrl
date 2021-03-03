const express = require('express');
const keygen = require('keygen');
const bodyParser = require('body-parser');

const pasteModel = require('../models/paste');

function insertPaste(req, res) {
    promises = [];
    promises.push(keygen(8));
    promises.push(keygen(64));

    Promise.all(promises)
    .then(keys => {
        pasteModel.insertPaste(keys[0], keys[1])
        .then(() => {
            res.send(keys[0])
        })
    });
}

function getPaste(req, res) {

    pasteModel.getPaste(req.params.paste)
    .then((contentkey) => {
        if (contentkey) {
            res.send(contentkey);
        } else {
            res.end();
        }
    });
}

router = express.Router();

router.get('/:paste', getPaste);
router.post('/', bodyParser.json(), insertPaste);

module.exports = router
