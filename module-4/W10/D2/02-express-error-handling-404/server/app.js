const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});





app.use((req, res, next) => {
  const error = new Error('Resource Not Found');

  error.statusCode = 404;
  // console.log(error);


  next(error);
});


app.use((err, req, res, next) => {

  res.status(404);
  res.json({
    message: err.message,
    statusCode: err.statusCode
  });

})


const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
