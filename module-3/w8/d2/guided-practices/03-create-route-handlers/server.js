const http = require("http");

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    console.log(reqBody); // description=woah%21%21&text=UPDATED
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body); // { description: 'woah!!', text: 'UPDATED' }
    }

    // Do not edit above this line

    // define route handlers here
    if (req.method === "GET" && req.url === "/") {
      // set a status code
      res.statusCode = 200;

      // set the headers & body if there is one
      res.setHeader("Content-Type", "text/plain");
      // res.write('text')

      return res.end("Dog Club");
      // end the response
    }

    // GET/dogs
    if (req.method === "GET" && req.url === "/dogs") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");

      return res.end("dogs index");
    }

     // POST/dogs
     if (req.method === "POST" && req.url === "/dogs") {
      console.log('are we making it')
      res.statusCode = 302;
      const newId = getNewDogId();

      res.setHeader("Location", `/dogs/${newId}`);

      return res.end();
    }

    if(req.method === 'GET' && req.url.includes('edit')) {

      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");

      // /dogs/1/edit
      // ['', 'dogs', '1', 'edit]
      // +'1'
      // 1
      const dogId = +req.url.split("/")[2];

      return res.end(`Dog edit form page for dogId: ${dogId}`);
    }



    // GET /dogs/new
    if (req.method === "GET" && req.url === "/dogs/new") {
      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");

      return res.end(`Dog create form page`);

    }


       // POST/dogs
       if (req.method === "POST" && req.url.startsWith("/dogs")) {
        const dogId = +req.url.split("/")[2];
        console.log(dogId)

        res.statusCode = 302;

        res.setHeader("Location", `/dogs/${dogId}`);

        return res.end();
      }

    // GET /dogs/:dogId
    if (req.method === "GET" && req.url.startsWith("/dogs")) {
      const dogId = +req.url.split("/")[2];

      res.statusCode = 200;
      res.setHeader("Content-type", "text/plain");

      return res.end(`Dog details for dogId: ${dogId}`);
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    return res.end("No matching route handler found for this endpoint");
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
