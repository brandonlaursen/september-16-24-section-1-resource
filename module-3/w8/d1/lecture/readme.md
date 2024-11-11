

# Overview


## Request - Response Cycle
- Conversation between a client and a server
 - Client - web browser
 - Server - backend API

### API - Application Programming Interface
 - Application - any software that performs a function
 - Interface a way to communicate with the software


### Today! We are learning about traditional web servers!
- Tradtional web server
  - only designed to handle a limited set of http methods
  - used for simple interaction with web pages
    - ex: submitting a form
  - Only two HTTP Methods
    - Get - retrieving data
    - Post - sending data
      - post handle put, patch and delete


## HTTP Verbs
 CRUD - create, read, update, destroy

`GET` - read
  * retrieving resources from the server
  * only require that the server return a resource.
  * Do not require a body
  * data is shared via url

`POST` - create
  * creating new resources on the server.
  * submitting a form
  * can have a body
  * will contain data server needs to make the request
  * ex: username + password


## Below verbs will be used in the endpoints for JSON Webservers, Tradtional web servers will only use POST and GET
`PUT` - update
  * update a resource
  * can have a body
  * contains data needed to update resource
  * ex: updating username
  * will need userId, email, password, new name etc all resources needed to make the update

`PATCH` - update
  * requests are also used to update a resource on the server.
  * They are very similar to PUT requests, but do not require the whole resource to perform the update.
  * they can have a body
  * PATCH request would only require your new name, not the rest of your account details, to succeed.
  ! unlike put would only require the new name

`DELETE` - destroy
  * DELETE requests destroy resources on the server.
  * These requests can have a body, BUT it's traditionally not recommended to include one.
  * These might be saved database records, like removing a product that's sold out, or more ephemeral resources, like logging a user out of their current session.
  * usually delete and get do not have body - only need when sending information




## RESTful Routes
  * `ReST` stands for `REpresentational State Transfer.`
  * `REST` is a convention for defining endpoints that other developers can easily understand how the server may process requests with those endpoints and what they should expect from their responses.

### Routes vs. Endpoints
  * A `route` is the `URL path` for a `request`.
  * An `endpoint` is a pattern for a `request` that has a specific route and `HTTP verb` combination to define how the server should process the request and what the response is expected to look like.
  * `Endpoints` are used to distinguish different types of requests from each other.

  * Here are some examples of endpoints vs. routes:
      - `Endpoint: GET /users, Route: /users`
      - `Endpoint: POST /users, Route: /users`
      - `Endpoint: POST /session`
      - ` Route: /session`
  * endpoint just includes the verb



## Back to the request response cycle
- request response cycle is a conversation between the a client and a server
- A client request
- A server responds


## The request and response are just objects!

#  REQUEST
- An object containing data about the details of the request
- That includes, the request line(endpoint)
- may include a Content-type header and a body if verb is a POST



### Request line -
- `Method` - indicated by HTTP verb
    - GET
- `URl` - location
    - /dogs

### `Note: An endpoint is a combination of the url and the verb`
  - ex: GET/ dogs

### Headers
  - `Content-Type` - type of data being sent in the request body
    -  `application/x-www-form-urlencoded`
  - `application/x-www-form-urlencoded`
      - is the content-type used for form data
      - another example of content-type is `application/json` which is what we will look at later in the week

### Body - data that doesn't fit in the header
    - `username=azure&password=hunter2`
  * The most common way form data is formatted is URL encoding. This is the default for data from web forms and looks a little like this:
      * ex: name=claire&age=29&iceCream=vanilla
  - The header content-type is where we specify the content of the body


### Example of GET
  ```json

 "1": {
    "endpoint": "Get all the dogs",
    "request": {
      "method": "GET",
      "URL": "/dogs",
      "headers": false,
      "body": false
    },
  }


  ```

## Some things to note!
- Get request do not require a body!
- Why? Because if we are retrieving data, there is no need to send data
- If no data is being sent, then there is also need for a content-type header


## Example of a POST
```json
 "2": {
    "endpoint": "Add a dogs",
    "request": {
      "method": "POST",
      "URL": "/dogs",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "dog": true
      }
    }
 }
```

## Some things to note!
- Post request do require a body!
- Why? Because we are sending data to a server
- The body will contain the content to be sent
- The header content-type will let the sever know they type of the body


## Remember!
- GET request do not need a content-type header and body

- Post request require a content-type header and a body




# Response
- An object containing data about the details of the response
- That includes, the status line
- may include a Content-type header and a body


### status line - `200 OK`
- `status code`
  - HTTP status codes are a numeric way of representing a server's response. Each code is a three-digit number accompanied by a short description.
- Can find all the status code on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)


### Headers
  - `Content-Type` - type of data being sent in the response body

 Common ones used
   * `text/html`	HTML document
   * `text/css`	CSS styles document
   * `text/javascript`	JavaScript script
   * `text/plain`	plain text
   * `image/png`	PNG Image
   * `application/json`

### Body - data that doesn't fit in the header



### Example of GET
  ```json

 "1": {
    "endpoint": "Get all the dogs",
    "request": {
      "method": "GET",
      "URL": "/dogs",
      "headers": false,
      "body": false
    },
     "response": {
      "headers": {
        "Content-Type": "text/html"
      },
      "statusCode": 200,
      "body": "some text"
    }
  }


  ```


## Example of a POST
```json
 "2": {
    "endpoint": "Form submission for adding a dog",
    "request": {
      "method": "POST",
      "URL": "/dogs",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": {
        "dog": true
      }
    },
    "response": {
      "headers": {
        "Location": "/dogs"
      },
      "statusCode": 302,
      "body": false
    }
  }
```



## Remember just like the request object; you only need a content-type header if there is a body.



### Later in the week we will cover json!
- Key differences
  - JSON uses a different mime data type
    - `application/json` instead of `application/x-www-form-urlencoded"`
  - PUT, PATCH, and DELETE will be available as endpoints

EX:
```json
{
  "1": {
    "endpoint": "Get all the dogs",
    "request": {
      "method": "GET",
      "URL": "/dogs",
      "headers": false,
      "body": false
    },
    "response": {
      "headers": {
        "Content-Type": "application/json"
      },
      "statusCode": 200,
      "body": [
        {
          "dogId": true,
          "dog": true
        }
      ]
    }
  },
  "2": {
    "endpoint": "Add a dogs",
    "request": {
      "method": "POST",
      "URL": "/dogs",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": {
        "dog": true
      }
    },
    "response": {
      "headers": {
        "Content-Type": "application/json"
      },
      "statusCode": 201,
      "body": {
        "dogId": true,
        "dog": true
      }
    }
  }
}
```
