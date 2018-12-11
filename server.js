const express = require( 'express' )
const fetch = require( 'node-fetch' )
const axios = require('axios');
const books = require('./livros.json');
const goodReadsJSONResponse = require('goodreads-json-api');

const key =  `KGXBPKnyuYSnSpYDYo7rA`
const secret = `Ynok75rEWd4uL8mH23HfCsvGSoMIU0afZi1x52R89zw`
const goodReadsURL = `https://www.goodreads.com`

let app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/books', (req, res) => {
  res.send(books.results);
});

app.use( '/goodreads/book/:isbn', async ( req, res ) => {
  const { isbn } = req.params;
  const url = `${goodReadsURL}/book/isbn/${isbn}?format=xml&key=${key}`;

  try {
    const result = await axios.get(url);

    res.send(goodReadsJSONResponse.convertToJson(result.data));
  } catch (error) {
    res.status(400).send('Erro na requisição.');
  }
} )

const server = app.listen( 3000, function() {
  const host = server.address().address
  const port = server.address().port

  console.log( "Server listening at http://localhost:3000/" )
} )
