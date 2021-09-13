var express = require('express');
var app = express();
app.use(express.json());


/*
http://localhost:3000/api?firstname=__proto__&nickname=snoopy
*/

obj = {};
app.get('/api', function(req, res){
  console.log(req.query.firstname);
  result = obj[req.query.firstname] = req.query.nickname;
  res.send(result);    // echo the result back


});

app.listen(3000);
