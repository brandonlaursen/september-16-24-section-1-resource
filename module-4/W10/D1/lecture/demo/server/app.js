



const express = require('express');



const app = express();





// app.use()
// function function1(){

// }

// function1();


// // app.get('/')
// function function2(){

// };

// if(req.method === 'GET' && req.url === '/'){
//   function2();
// }

// function function3(){

// }

// if(req.method === 'GET' && req.url === '/home'){
//   function2();
// }









// middlewear
app.use(express.json());


// app.use((req, res, next) => {
//   console.log('first middle wear!');
//   next();
// })

// GET
app.get('/', (req, res) => {

  console.log('inside GET /');

  res.send('Home');

})


// GET /posts/:id
app.get('/posts/:id', (req, res) => {


  const id =  req.params.id
  // console.log(id);

  // res.statusCode = 400;
  res.status(200);

  const body = {
    name:'brandon'
  };

  res.json(body);
});


// POST /posts

app.post('/posts', (req, res) => {

    console.log(req.body);// { name: 'Big bear', age: '19' }

    const { name, age } = req.body;

    // INSERT INTO posts
    res.status(201);

    res.json('success!')

    // res.send(`<h1>hello ${name} </h1>`)

});


// GET /
// app.use((req, res, next) => {

//   const errors = 'error message!';

//   next(errors)
// })


// app.use((err, req, res) => {
//   console.log('error!!!')
// })

const port = 5001;

app.listen(port, () => console.log(`listening on port ${port}`))
