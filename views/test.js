const request = require('request');

 const host = '127.0.0.1';
 const port = 7000;

 request.get('http://localhost/deliveryservice/rest/view/index.php', (req, res) => {
console.log(res.body);

 });
