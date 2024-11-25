# Practice Assessment Quiz: Express

<!-- Initialize an Express application -->

```js
// 1:
const express = require("express");
const app = express();

// 2:
const app = require("express");

// 3:
const app = require("express").App;

// 4:
const express = require("express");
```

<quiz>
  <question>
    <p>In the code above, which set of code initializes the Express application properly?</p>
    <answer correct>1</answer>
    <answer>2</answer>
    <answer>3</answer>
    <answer>4</answer>
    <explanation>To initialize an Express application, you need to invoke the
    unnamed export of the `express` Node.js module.</explanation>
  </question>
<quiz>

<!-- Use Express to send simple text and JSON in response to a request from a client -->

```js
res.json("Hello World");
```

<quiz>
  <question>
    <p>What will the "Content-Type" header of the response be when Express sends
    the response above?</p>
    <answer correct>application/json</answer>
    <answer>text/html</answer>
    <answer>text/plain</answer>
    <answer>application/x-www-form-urlencoded</answer>
    <explanation>Invoking `.json` on the Response object (`res`) will
    automatically set the "Content-Type" header of the response to be
    `application/json`, indicating that the body of the response should be
    parsed as JSON.</explanation>
  </question>
<quiz>

<!-- Create a route handler using express -->

```js
app.get("/hello/:p", (req, res) => {
  res.send("Hello to you too!");
});
```

<quiz>
  <question>
    <p>True or False: The route handler above will be invoked when a request to
    `GET /hello/world` is sent to the server.</p>
    <answer correct>True</answer>
    <answer>False</answer>
    <explanation>The route handler above matches all requests to
    `GET /hello/:p`, which includes `GET /hello/world` where `:p` is matched
    with `world`.</explanation>
  </question>
<quiz>

<!-- Compare and contrast the methods and properties on the request and response objects between an Express and Node/HTTP server -->

<quiz>
  <question>
    <p>True or False: Route parameters in **both** an HTTP server and an Express
    server are automatically parsed and matched.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>Route parameters must be explicitly parsed by an HTTP server,
    whereas in an Express server, they are automatically matched and parsed.</explanation>
  </question>
<quiz>

<!-- Predict the order that Express will match requests with route handlers -->

```js
// route handlers below are listed in order
// 1:
app.post('/world', (req, res) => { ... });

// 2:
app.post('/:word', (req, res) => { ... });

// 3:
app.post('/hello', (req, res) => { ... });

// 4:
app.post('/:word', (req, res) => { ... });
```

<quiz>
  <question>
    <p>Which route handler will be invoked for a `POST /hello` request if all
    the route handlers are defined in order from 1-4?</p>
    <answer>1</answer>
    <answer correct>2</answer>
    <answer>3</answer>
    <answer>4</answer>
    <explanation>Express will attempt to match the request to route handlers in
    the order that they are defined (top->down). Only route handlers 2 and 3
    can possibly match to the request of `POST /hello`. Since route handler 2 is
    defined before route handler 3, route handler 2 will be invoked first.</explanation>
  </question>
<quiz>

<!-- LO: Justify the selection of Express as a back-end framework -->

```plaintext
Scenario:
I want to build a server written in any language.
I don't care too much about customizing my server.
I want most of the backend choices like how to
organize my routes and how to parse the body
decided for me.
```

<quiz>
  <question>
    <p>Based on the scenario above, should you use Express as a framework?</p>
    <answer>Yes</answer>
    <answer correct>No</answer>
    <explanation>The best reasons to use Express are its ability to minimize repeated code and create a backend using the same language (JavaScript) as the frontend code, but still have the ability to easily customize the application to use any organization for middleware or routes. If you want to use a very opinionated backend where you don't have to choose which request bodies to parse and where you have the file structure for route and middleware organization decided for you, then you should not choose Express.</explanation>
  </question>
<quiz>

<!-- LO: Refactor an HTTP server and convert it to use Express -->

```js
const server = http.createServer((req, res) => {
  req.on("end", () => {
    if (req.method === "POST" && req.url === "/tags/") {
      // Process request
    }
  });
});
```

<quiz>
  <question>
    <p>How does the above code for route handling in an HTTP Server translate to Express?</p>
    <answer correct>`app.post('/tags', (req, res) => { /* Process request */ })`</answer>
    <answer>`app.post('/tags/:tagId', (req, res) => { /* Process request */ })`</answer>
    <answer>`app.get('/tags', (req, res) => { /* Process request */ })`</answer>
    <explanation>Where the HTTP server had to match request methods and urls using string comparisons (like `===` and `startsWith()`), an express server has a function for each method (e.g. `app.get()`, and variables in paths (e.g. `/tags` or `/tags/:tagId`).</explanation>
  </question>
<quiz>

<!-- Debug an Express server using Postman -->

<quiz>
  <question>
    <p>What is Postman primarily used for when developing an Express server?</p>
    <answer correct>To test the endpoints of the Express server.</answer>
    <answer>To define route handlers on the Express server.</answer>
    <answer>To open the connection between the network and the Express server.</answer>
    <answer>To allow the Express server to listen to requests on the network.</answer>
    <explanation>Postman is a tool used to test endpoints that you created on the Express server.</explanation>
  </question>
<quiz>

<!-- LO: Compare and Contrast an Express application and an Express router -->
<quiz>
  <question multiple>
    <p>Identify one or more of the following things that an Express router can do:</p>
    <answer correct>Define route handlers.</answer>
    <answer correct>Bind middleware.</answer>
    <answer correct>Connect to other Express routers.</answer>
    <answer>Listen for requests on the network.</answer>
    <explanation>An Express router can do anything an Express application can do except listen for requests on the network. Also, route handlers defined on an Express router don't have an exact URL until they are connected to an Express application.</explanation>
  </question>
<quiz>

<!-- Create a resource for RESTful Routes using an Express router -->

```js
// 1:
app.use(tweetsRouter);

// 2:
app.use('/tweets', (req, res) => { ... });

// 3:
app.use('/tweets', tweetsRouter);

// 4:
app.get('/tweets', (req, res) => { ... });
app.post('/tweets', (req, res) => { ... });
app.put('/tweets/:id', (req, res) => { ... });
```

<quiz>
  <question>
    <p>Which of the following code sections **BEST** handles requests for the `tweets` **resource**?</p>
    <answer>1</answer>
    <answer>2</answer>
    <answer correct>3</answer>
    <answer>4</answer>
    <explanation>Different endpoints with the same section in their URL path
    have the same resource. A resource is a section of the URL path. A resource
    for `tweets` needs to be a set of endpoints that have `/tweet` in the URL
    path. An Express router is a tool to define a resource for an Express
    server.</explanation>
  </question>
<quiz>

<!-- Connect an Express router to the Express application -->

```js
const router = express.Router();
router.get('/hello', (req, res) => { ... });

app.use('/world', router);
```

<quiz>
  <question>
    <p>Which of the following requests will be matched with the
    `router.get('hello', ...)` route handler?</p>
    <answer>`GET /hello`</answer>
    <answer>`GET /world`</answer>
    <answer>`GET /hello/world`</answer>
    <answer correct>`GET /world/hello`</answer>
    <explanation>The route handler's URL will be the path that is used to
    connect the router to the application plus the path defined in the route
    handler (`/world` + `/hello`).</explanation>
  </question>
<quiz>

<!-- Add a middleware globally, to a specific route, and/or to a specific router -->

```js
const helloWorld = (req, res, next) => { ... };

router.use(helloWorld);

router.get('/hello', (req, res) => { ... });

app.use('/router', router);
```

<quiz>
  <question>
    <p>In what way is the `helloWorld` middleware is connected?</p>
    <answer>globally</answer>
    <answer>to a route handler</answer>
    <answer correct>to a router</answer>
    <explanation>The `helloWorld` middleware is connected to the defined router.</explanation>
  </question>
<quiz>

<!-- Predict the order of execution for middlewares -->

```js
// middleware below are listed in order

// 1:
app.get("/", (req, res, next) => {
  next(err);
});

// 2:
app.use((err, req, res, next) => {
  next(err);
});

// 3:
app.use((err, req, res, next) => {
  return res.json();
});

// 4:
app.use((req, res, next) => {
  next();
});
```

<quiz>
  <question>
    <p>In the code above, assume that all the middleware are defined and
    connected in order from 1-4. Will middleware 3 be invoked for a request to
    `GET /hello`?</p>
    <answer>Yes</answer>
    <answer correct>No</answer>
    <explanation>Middleware are matched and executed in order that they are
    defined (top->down). For a request of `GET /hello`, middleware 1 will not be
    matched with so it will not execute. Middleware 2 is an error handling
    middleware, but since there is no error yet in the middleware chain it will
    not be executed. Middleware 3 is also an error handling middleware and will
    not be executed.</explanation>
  </question>
<quiz>

<!-- LO: Define middleware -->

<quiz>
  <question multiple>
    <p>An Express middleware can be one or more of the following:</p>
    <answer correct>A function</answer>
    <answer correct>An array of functions</answer>
    <answer>An object</answer>
    <answer>A string</answer>
    <answer>An array of any element type</answer>
    <explanation>An Express middleware can be a function or an array of functions.</explanation>
  </question>
<quiz>

<!-- Create an Express middleware using a function or an array of functions -->

```js
app.use((req, res, next) => {
  if (req.method === "GET") {
    return next();
  }
  next(new Error("This is an error message"));
});
```

<quiz>
  <question>
    <p>What will the middleware above do?</p>
    <answer>Invoke the next error handling middleware with an error for all requests.</answer>
    <answer>Return a response of 'This is an error message'.</answer>
    <answer correct>Invoke the next error handling middleware for all non-`GET` requests.</answer>
    <answer>Invoke the next error handling middleware for all `GET` requests.</answer>
    <explanation>When this middleware runs, it will invoke the next
    middleware for all `GET` requests, but it will invoke the next
    error-handling middleware for all non-`GET` requests.</explanation>
  </question>
<quiz>

<!-- Compare and contrast a regular Express middleware and an Express error handling middleware -->

<quiz>
  <question>
    <p>True or False: An Express error handling middleware **does NOT need** 4
    arguments in its function definition.</p>
    <answer>True</answer>
    <answer correct>False</answer>
    <explanation>An Express error handling middleware MUST have 4 arguments in
    its function definition.</explanation>
  </question>
<quiz>

<!-- Connect a middleware using app.use -->

```js
const routeHandler = (req, res) => {
  res.json({ message: "Route Handler invoked" });
};
```

<quiz>
  <question>
    <p>Based on the code above, which of the following code will connect the
    `routeHandler` to an Express application where a request with a URL pattern
    of `DELETE /tweets/:id` will invoke the `routeHandler`?</p>
    <answer correct>`app.use('/tweets', routeHandler)`</answer>
    <answer>`app.use('/tweets/2', routeHandler)`</answer>
    <answer>`app.delete('/tweets', routeHandler)`</answer>
    <answer>`app.delete('/tweets/2', routeHandler)`</answer>
    <explanation>`/tweets/2` is a URL path that matches the URL pattern of
    `/tweets/:id`, but it will not match a URL path where the `id` route parameter
    is `3` (ex: `/tweets/3`). Therefore, all answer choices containing `/tweets/2` can
    be eliminated. `app.delete` takes in a URL pattern as its first argument. The URL
    pattern of `/tweets` does not match the desired URL pattern of `/tweets/:id`,
    therefore, `app.delete('/tweets', routeHandler)` can be eliminated. `app.use` takes
    in a URL prefix which matches the start of the desired URL pattern
    `/tweets/:id`. Also, since `app.use` does not care about the method of the request,
    `routeHandler` will be invoked when it is connected as
    `app.use('/tweets', routeHandler)` and a request to `DELETE /tweets/:id` is made.
    </explanation>
  </question>
<quiz>
