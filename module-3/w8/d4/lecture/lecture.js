


const array = [1, 'hello, "world"', 3.14, { id: 17 }];
console.log(JSON.stringify(array));// [1,"hello, \"world\"",3.14,{"id":17}]


const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
console.log(JSON.parse(str));
// [ 1, 'hello, "world"', 3.14, { id: 17 } ]




const fetch = require("node-fetch");

async function function3() {

  const data = 'data';

  const parsed = JSON.parse(data);

  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );

  console.log(response.body)

  if (response) {
    console.log("before serialized", response);
    const deserialized = await response.json();

    console.log("after deserialized", deserialized);
  } else {
    console.log("ERROR");
  }


}

function3();


/*

POST /posts - Submit the creation of a new post

GET /posts/:postId/edit A form for editing a specific post
POST /posts/:postId - Submit the edit of an existing post

  /traditional
 GET /resource
 POST /resource/:id/edit
 POST /resource/:id/delete

 GET /resource/new


  "application/json"
 JSON Web server
 PUT /resource/:id
 DELETE /resource/:id




*/
