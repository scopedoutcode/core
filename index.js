require('dotenv').config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const endpoints = require('./static/endpoints')
const requestHandlers = require('./request-handlers')

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors({
    credentials: false
}))

app.get(endpoints.SEARCH_TRADEABLE_SYMBOLS_ENDPOINT, requestHandlers.tradeableSymbols.fetchFromSearch)

app.get('/*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app