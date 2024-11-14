const http = require("http");

const dogs = [
  {
    dogId: 1,
    name: "Fluffy",
    age: 2,
  },
];

let nextDogId = 2;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    // request is finished assembly the entire request body
    // Parsing the body of the request depending on the Content-Type header
    if (reqBody) {
      switch (req.headers["content-type"]) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ======================== ROUTE HANDLERS ======================== */

    // GET /dogs
    if (req.method === "GET" && req.url === "/dogs") {
      // status code
      res.statusCode = 200;

      // headers
      res.setHeader("Content-type", "application/json");

      // body
      return res.end(JSON.stringify(dogs));
    }

    // GET /dogs/:dogId
    if (req.method === "GET" && req.url.startsWith("/dogs/")) {
      const urlParts = req.url.split("/"); // ['', 'dogs', '1']
      if (urlParts.length === 3) {
        const dogId = urlParts[2];
        // console.log(dogId);

        const foundDog = dogs.find((dog) => dog.dogId === Number(dogId));
        // console.log(foundDog);// { dogId: 1, name: 'Fluffy', age: 2 }
        if (foundDog) {
          res.statusCode = 200;
          res.setHeader("Content-type", "application/json");
          return res.end(JSON.stringify(foundDog));
        }

        res.statusCode = 404;
        res.setHeader("Content-type", "application/json");
        return res.end(JSON.stringify({ message: "no dog found" }));
      }
      return res.end();
    }

    // POST /dogs
    if (req.method === "POST" && req.url === "/dogs") {
      const { name, age } = req.body;
      // console.log(name, age)

      const newDog = {
        name,
        age,
        dogId: getNewDogId(),
      };

      // console.log(newDog);
      // console.log(dogs);
      dogs.push(newDog);

      res.statusCode = 200;
      res.setHeader("Content-type", "application/json");
      return res.end(JSON.stringify(newDog));
    }

    // PUT or PATCH /dogs/:dogId
    if (
      (req.method === "PUT" || req.method === "PATCH") &&
      req.url.startsWith("/dogs/")
    ) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const dogId = urlParts[2];

        const foundDog = dogs.find((dog) => dog.dogId === Number(dogId));
        console.log(foundDog);

        const { name, age } = req.body;

        foundDog.name = name;
        foundDog.age = age;

        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        return res.end(JSON.stringify(foundDog));
      }
      return res.end();
    }

    // DELETE /dogs/:dogId
    if (req.method === "DELETE" && req.url.startsWith("/dogs/")) {
      const urlParts = req.url.split("/");
      if (urlParts.length === 3) {
        const dogId = urlParts[2];

        const dogIndex = dogs.findIndex((dog) => dog.dogId === Number(dogId));
        // console.log(dogs);

        dogs.splice(dogIndex, 1);
        console.log(dogs);

        res.statusCode = 200;
        res.setHeader("Content-type", "application/json");
        return res.end(JSON.stringify({ message: "Successfully deleted" }));
      }
      return res.end();
    }

    // No matching endpoint
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    return res.end("Endpoint not found");
  });
});

if (require.main === module) {
  const port = 8000;
  server.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = server;
}
