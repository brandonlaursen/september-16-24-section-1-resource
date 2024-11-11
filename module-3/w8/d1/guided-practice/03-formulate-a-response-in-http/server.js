// * import the built-in http package
const http = require('http');

// * call the createServer method on the import and pass in a function as a single argument.
const server = http.createServer((req, res) => {

  // REQUEST
  // console.log("req", req);
  // console.log("method", req.method); // GET
  // console.log("headers", req.headers); // headers {}
  // console.log("url", req.url); // /
  // console.log("on", req.on); // [Function (anonymous)]

  // RESPONSE
  // console.log("res", res); // giant object
  // console.log("statusCode", res.statusCode); // 200
  // console.log("setHeader", res.setHeader); // [Function: setHeader]
  // console.log("write", res.write); // [Function: write]
  // console.log("end", res.end); // [Function: end]

    // * set the response body
    const responseBody = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World!</title>
        </head>
        <body>
            <h1>Hello there!</h1>
        </body>
        </html>`;

    // *  set the status code
    res.statusCode = 200;

    // *  set the header
    res.setHeader('Content-Type', 'text/html')

    // *  write method doesn't set the body of the response, it adds to the body of the response
    // res.write(responseBody);
    // res.end()

    // *  same as write - The end method has one more functionality though. Which is to end the creation of the response and send it.
    res.end(responseBody);
    return;
})

// .listen take in two arguments
// * first is the port
// * second is a callback function
// * Common practice is to log a message to the console saying that the server is connected and listening on the specified port.
const port = 5000;

server.listen(port, () => console.log(`listening on port ${port}`))
