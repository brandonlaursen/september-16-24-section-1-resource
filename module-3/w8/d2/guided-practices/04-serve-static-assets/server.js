

const http = require('http');
const fs = require("fs");



const server = http.createServer((req, res) => {


  if(req.method === 'GET' && req.url.startsWith('/static')) {

    const assetType = req.url.split('/')[2];
    console.log(req.url)

    let contentType;
    if(assetType === 'css') {
      contentType = 'text/css'
    } else if(assetType === 'images') {
      contentType = 'image/jpeg'
    }  else {
      contentType = 'text/plain'
    }


    res.statusCode = 200;

    res.setHeader('Content-type', contentType);

    const assetPath = req.url.split("/static")[1]
    // console.log("assetPath:", assetPath);// /images/dog.jpg

    const body = fs.readFileSync(`./assets/${assetPath}`);

    return res.end(body)

  }

  const body = fs.readFileSync('./index.html');

  res.statusCode = 200;

  res.setHeader('Context-type', 'text/html');

  return res.end(body);

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
