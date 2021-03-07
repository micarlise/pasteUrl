const express = require('express');

const keygen = require('keygen');
const path = require('path');

const bodyParser = require('body-parser');
const multer = require('multer');

const pasteModel = require('../models/paste');

function insertPaste(req, res) {

    if (!req.file || !req.file.filename) {
        res.status(400);
        res.end();
        return;
    }

    let contentKey = req.file.filename;

    keygen(8)
    .then(key => {
        pasteModel.insertPaste(key, contentKey)
        .then(() => {
            res.status(201);
            res.send(key + '\n');
        })
    });
}

function getPaste(req, res) {

    pasteModel.getPaste(req.params.paste)
    .then((contentkey) => {
        if (contentkey) {
            let pathPrefix = path.join(__dirname, '../uploads');
            res.download(pathPrefix + '/' + contentkey);
        } else {
            res.status(404);
            res.end();
        }
    });
}

let upload = multer({dest: path.join(__dirname, '../uploads') });

router = express.Router();

router.get('/:paste', getPaste);
router.post('/', 
    bodyParser.json(), 
    upload.single('paste'),
    insertPaste
);

module.exports = router
