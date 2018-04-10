var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

bodyParser = require('body-parser');

// Tells the system whether you want to use a simple algorithm for shallow parsing 
// or complex algorithm for deep parsing that can deal with nested objects
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/deviceRoutes");
routes(app);

app.listen(port);
console.log(`Device registration API started on port ${port}`);