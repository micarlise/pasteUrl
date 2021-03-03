const request = require('supertest');
const express = require('express');

const pasteRouter = require('../routes/paste');

let app = express();

app.use('/', pasteRouter);

describe('API', function() {

    it('POST /', function(done) {
        request(app)
            .post('/')
            .expect(200, done)
    });

    it('GET /', function(done) {
        request(app)
            .get('/')
            .expect(404, done)
    });
});
