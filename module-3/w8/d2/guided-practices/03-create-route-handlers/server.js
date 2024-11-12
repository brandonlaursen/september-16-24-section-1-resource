const http = require('http');

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
    console.log(reqBody);// description=woah%21%21&text=UPDATED
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
      console.log(req.body);// { description: 'woah!!', text: 'UPDATED' }
    }

    // Do not edit above this line

    // define route handlers here
    if(req.method === 'GET' && req.url === '/') {
      // console.log('we made it!')
      // set a status code
      // console.log('==>',res);
      res.statusCode = 200;

      // set the headers & body if there is one
      res.setHeader('Content-Type', 'text/plain')
      // res.write('text')

      return res.end('text');
      // end the response

    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
