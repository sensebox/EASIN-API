EASIN-API
=========
This is the back-end for [EASIN - Eauropean Alien Species Information Network](http://easin.jrc.ec.europa.eu/).

### Technologies

* [node.js]
* [MongoDB]

### Install dependencies (Ubuntu)

It is assumed that you have installed node.js (developed using 0.12.7)

Install MongoDB according to [the manual](http://docs.mongodb.org/manual/installation/).

### Run for Development & Production
Edit your configuration for development in ```config.development.js``` or for production in ```config.production.js```

#### Server configuration
|Variable name             | Explanation|
|--------------------------|---------------|
|```config.server.name```|Name of the server|
|```config.server.version``` |Version of the server|
|```config.server.port```      |Port on which the server is running|
|```config.server.path```  |Pathname for all routes|

A basic configuration can be found at ```config.development.js```.

#### MongoDB configuration
|Variable name             | Explanation|
|--------------------------|---------------|
|```config.mongo.server```|Name of server where MongoDB is running (e.g. localhost)|
|```config.mongo.port```|MongoDB Port is running on, leave empty if default (27017) is configured|
|```config.mongo.collection``` |Name of Collection where to store the reports|
|```config.mongo.dbuser```      |MongoDB database user, leave empty if not configured|
|```config.mongo.dbpass```  |MongoDB database password, leave empty if not configured|

After that, run the following command to install dependencies:

```npm install```

Then start the API process, press CTRL+C to stop:

```
NODE_ENV=(production||development) node index.js
```
Default value for ```NODE_ENV``` is ```development```.

Or you can use [forever](https://github.com/foreverjs/forever) for running the API.


### License

[MIT](license.md) - Matthias Pfeil 2015

[node.js]:http://nodejs.org/
[MongoDB]:http://www.mongodb.com/