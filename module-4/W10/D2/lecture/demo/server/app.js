const express = require("express");

const app = express();

require('dotenv').config();

console.log('======>',process.env.PORT);


const artistsRouter = require('./routes/artists');


app.use('/artists', artistsRouter);

// /artists/artists
// /artists

// /artists/artists/:id





// app.use(express.json());



// app.use((req, res, next) => {
  //   // console.log('in first middlewear');
  //   console.log(req.body);

  //   next();
  // });



// app.use((req, res, next) => {

//   console.log('first middlewear');

//   const error = new Error('sorry something was wrong!');

//   next(error);
// })


// app.get('/home', (req, res, next) => {

//   console.log('in home')
//   res.send('home');
// })


// app.post('/posts', (req, res, next) => {

//   console.log('in posts', req.body.password);

//   if(!(req.body.password.includes('!'))) {
//     const  error = new Error('need special character');
//     next(error);
//   }

//   res.send('posts');
// })

// app.use((err, req, res, next) => {
//   console.log(err);

//   res.json({
//     message: err.message
//   })
// })

// app.use((req, res, next) => {
//   console.log('last middlewear');
//   next()
// })



const port = process.env.PORT || 3000;

app.listen(port, () => `Server is on listening on ${port}`);
