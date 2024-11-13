

// Request - Response Cycle
// * conversation between a client and a server
// * client - frontend/postman/browser
// * server/api


// How can we send a request?
// * using FETCH

//* GET
fetch("/resource");

// * POST
fetch("/resource", {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({ name: "little bear", age: 14 }),
});

// What does fetch return?
// * A promise

// .then
fetch("/resource")
  .then((data) => data.text())
  .then((data) => console.log(data));


// async await
async function wrapper(){
  const data = await fetch("/resource");
  const text = data.text();
  console.log(text);
}



// * What do we send fetch request too?
// server's endpoints

// The servers have endpoints
// * method + url
// * GET /resource


// Methods
// * Traditional web server
// GET/POST


// Endpoints follow restful convention
// ! This is convention for tradtional web servers
// * GET /resource
// * POST /resource
// * GET /resource/:id
// * POST /resource/:id/edit
// * POST /resource/:id/delete


// Traditional Web Server
// * REQUEST
// * GET
request = {
  method: "GET",
  URL: "/resource",
  headers: false,
  body: false,
};

response = {
  headers: {
    "Content-Type": "text/html",
    "Location": '/'
  },
  statusCode: 200,
  body: true,
};

// * POST
request = {
  method: "POST",
  URL: "/resource",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: {
    key: true,
  },
};

response = {
  headers: {
    Location: "/dogs",
  },
  statusCode: 302,
  body: false,
};

// * PUT/PATCH
request = {
  method: "POST",
  URL: "/resource/:id/edit",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: {
    key: true,
  },
};

// * DELETE
request = {
  method: "POST",
  URL: "/resource/:id/delete",
};





// Endpoints follow restful convention
// * GET /resource
// * POST /resource/
// * GET /resource/:id
// * PUT /resource/:id
// * PATCH /resource/:id
// * DELETE /resource/:id/delet



// * JSON Web server
// GET/POST/PUT/PATCH/DELETE


// JSON Web Server
// * REQUEST
// * GET
request = {
  method: "GET",
  URL: "/resource",
  headers: false,
  body: false,
};

response = {
  headers: {
    "Content-Type": "application/json",
  },
  statusCode: 200,
  body: true,
};

// * POST
request = {
  method: "POST",
  URL: "/resource",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    key: true,
  },
};

response = {
  headers: {
    Location: "/dogs",
  },
  statusCode: 302,
  body: false,
};

// * PUT/PATCH
request = {
  method: "PUT",
  URL: "/resource/:id",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    key: true,
  },
};

// * DELETE
request = {
  method: "DELETE",
  URL: "/resource/:id",
};
