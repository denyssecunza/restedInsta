const express = require("express");
const app = express();
const cors = require("cors");
const queries = require("./db/dbqueries");
const PORT = process.env.PORT || 3000;
const users = require('./api/users');
const photos = require('./api/photos');
const comments = require('./api/comments');
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded())

app.use('/users', users);
app.use('/photos', photos);
app.use('/comments', comments);


// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: res.locals.error = req.app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT, () => console.log(`Listen on port http://localhost:${PORT}`));
module.exports = app;
