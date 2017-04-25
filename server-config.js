const express = require('express');
const db = require('./db-config');
const http = require('http');
const request = require('request');
// const url = require('url');
// const bodyParser = require('body-parser');

const app = express();


app.use(express.static(__dirname + '/client'));
// app.use(bodyParser.json());

app.get('/giphy*', (req, res) => {
  console.log('recieved');
  let options = {
    "method": "GET",
    "hostname": "api.giphy.com",
    "port": null,
    "path": "/v1/gifs/search?q=dog&api_key=dc6zaTOxFJmzC",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "869209ce-5ce1-da50-5537-fe5075ae6c9b"
    }
  };

    let call = http.request(options, function (response) {
      let chunks = [];

      response.on("data", function (chunk) {
        chunks.push(chunk);
      });

      response.on("end", function () {
        let body = Buffer.concat(chunks);
        res.status(200);
        res.send(body);
      });
  });

  call.end();
})

// function makeCall (callback) {
//     // here we make a call using request module
//     request.get(
//         { uri: 'THEPATHAND ENDPOINT YOU REQUEST',
//          json: true,
//           headers: {
//             'Content-Type' : 'application/x-www-form-urlencoded',
//         }
//         },
//         function (error, res, object) {
//           if (error) { return callback(error); }
//
//             if (res.statusCode != 200 ) {
//               return callback('statusCode');
//             }
//
//             callback(null, object);
//         }
//       );
// }


module.exports = app;
