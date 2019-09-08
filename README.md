# JavaScript, TypeScript and Node.js Training

## Software to be installed, course curriculum
- The list of software to be installed before start of training can be found [here](./js-ts-nodejs-list-of-software-to-be-installed.pdf)
- The course curriculum can be found [here](./git-javascript-typescript-nodejs-revised.pdf)

## Meeting timings
Sep 7, 8, 14, 15, 21, 22, 28, 29 - 9:00 AM - 12:00 PM (PST)

## Exercises
Please refer the [exercises document](./exercises.md) for exercises given during the training sessions.

## Video recordings
- [Sep 9 2019]()
- [Sep 10 2019]()
- [Sep 11 2019]()
- [Sep 12 2019]()
- [Sep 13 2019]()

## Server for building the React app
This backend server shall be used to build an application - https://awesome-store-server.herokuapp.com/. The same server can be run locally by following the instructions below.

## How to run the server for products (Ajax example)
You need to run the server placed within server/ folder for the examples on Ajax.

- To run the server first go inside the server/ folder
```
$ cd server
```

- Next install all required node modules (server's dependencies). The dependencies for Node projects are given in package.json.
```
$ npm install
```

- To run the server
```
$ npm run json:server
```

- The server starts on the following URL
```
$ http://localhost:4201/
```

- You can access the data via various endpoints. For example, to retrieve the comments for the post with id = 1, we can hit the endpoint...
```
http://localhost:4201/posts/1/comments
```

### Emmet
- [Emmet](https://docs.emmet.io/)

## Extra material
- [JavaScript Demos](https://skewcode.s3.amazonaws.com/demos/demos.html)

## References for Git, JavaScript, TypeScript and Node.js
- [Pro Git - free online book on Git](https://git-scm.com/book/en/v2)
- [Excellent, in-depth and complete coverage on JavaScript](https://javascript.info/)
- [Eloquent JavaScript by Marijn Haverbeke, a free book on JS with excellent exercises on all topics](http://eloquentjavascript.net/)
- [Mozilla Developer Network documentation on web technologies](https://developer.mozilla.org)
- [Compatibility tables for JavaScript](https://kangax.github.io/compat-table/es6/)
- [TypeScript website](https://www.typescriptlang.org/)
- [Node.js website](https://nodejs.org/en/)