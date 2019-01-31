# FriendFinder
Dating Application using NodeJS and ExpressJS

FriendFinder is a web application that was built using JavaScript, [Node.js](https://nodejs.org/), and [Express.js](https://expressjs.com/). The application takes user-inserted data -- in the form of an array -- and compares it to similar sets of data stored on a virtual server. The user profile that has the least differences from the user is then displayed -- similar to how people are matched up through online dating sites.

HTML, CSS, and [Bootstrap](https://getbootstrap.com/) were used to create the two pages for the front side of the application, while the backside was built using JavaScript, Node.js, and Express.js. Rather than storing user-inserted data in a traditional server using something like MySQL or MongoDB, we use Node.js to construct a virtual server for storing JSON data, and streamline our access to it using Express.js.

In addition to using Node.js and Express.js, this application was built using [NPM](https://www.npmjs.com/) modules like [the Express module](https://www.npmjs.com/package/express) and [Path](https://www.npmjs.com/package/path). These modules made it much easier for us to build data paths for POST and GET requests, rather than having to resort to traditional AJAX calls.

The live version of this web application can be seen [here](https://murmuring-thicket-30068.herokuapp.com/), courtesy of [Heroku](https://www.heroku.com/).
