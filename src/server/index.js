const express = require('express');
const fetch = require('node-fetch');

Object.assign(global, {
  fetch,
  Headers: fetch.Headers,
});

const app = express();
const port = 4000;

app.use(express.static('./build/client'));

//app.use(html);
app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>
          <%= htmlWebpackPlugin.options.title %>
      </title>
  
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous">
  
      <!-- Optional theme -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
          crossorigin="anonymous">
  
  </head>
  
  <body id="body">
      <div id="root"></div>
  </body>
  
  </html>
  `);
});

app.listen(port, () => {
  console.log(`listening on ${port}...`);
});
