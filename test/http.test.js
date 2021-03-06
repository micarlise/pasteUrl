const request = require('supertest');
const express = require('express');

const pasteRouter = require('../routes/paste');

let app = express();

app.use('/', pasteRouter);

describe('API', function() {

    it('POST / 200', function(done) {
        request(app)
            .post('/')
            .attach('paste', 'test/fixtures/testfile')
            .expect(201, done)
    });
    
    it('POST / 400', function(done) {
        request(app)
            .post('/')
            .expect(400, done)
    });

    it('GET /', function(done) {
        request(app)
            .get('/')
            .expect(404, done)
    });
});
