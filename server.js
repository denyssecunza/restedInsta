const express = require("express");
const app = express();
const cors = require("cors");
const queries = require("./db/dbqueries");
const PORT = process.env.PORT || 3000;
const users = require('./api/users');
const photos = require('./api/photos');
const comments = require('./api/comments');

app.use(cors());

// app.get("/starter_route", (req, res) => {
//   res.send({ express: "The backend is connected to React" });
// });

app.use('/users', users);
app.use('/photos', photos);
app.use('/comments', comments);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

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
