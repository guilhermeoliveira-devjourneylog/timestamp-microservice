var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

let responseObject = {};

app.get('/api/timestamp/:input?', (request, response) => {
  let input = request.params.input
  
  if (!input) {
    let date = new Date();
    responseObject['unix'] = date.getTime();
    responseObject['utc'] = date.toUTCString();
  } else if(input.includes('-')){
    /* Date String */
    responseObject['unix'] = new Date(input).getTime()
    responseObject['utc'] = new Date(input).toUTCString()
  }else{
    /* Timestamp */
    input = parseInt(input)
    
    responseObject['unix'] = new Date(input).getTime()
    responseObject['utc'] = new Date(input).toUTCString()
  }
  
  if(!responseObject['unix'] || !responseObject['utc']){
    response.json({error: 'Invalid Date'})
  } else {
    response.json(responseObject)
  }
})

app.get('/api/:date?', (request, response) => {
  let date = request.params.date;
  
  // Check if the parameter is empty - Return the current date
  if (!date) {
    const currentTimestamp = new Date();
    return response.json({ unix: currentTimestamp.getTime(), utc: currentTimestamp.toUTCString() });
  }

  // Check if the parameter is a timestamp (only contains numbers)
  if (/^\d+$/.test(date)) {
    date = parseInt(date);
  }
  
  const resultDate = new Date(date);
  
  // Check if the date is valid
  if (isNaN(resultDate.getTime())) {
    return response.json({ error: 'Invalid Date' });
  }
  
  // Return the formatted date
  response.json({ unix: resultDate.getTime(), utc: resultDate.toUTCString() });
});

let bodyParser = require('body-parser')

app.post('/api/timestampform', bodyParser.urlencoded({ extended: false }), (request, response) => {
  let input = request.body.input;
  let getUrl = '/api/' + input;
  
  response.redirect(getUrl);
});
