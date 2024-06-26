# QUICK TRACK
VIT Chennai Bus Tracking System Documentation
## Project Overview

The VIT Chennai Bus Tracking System is designed to collect, store, and display real-time and historical location data for the college's bus fleet. The system captures the geographical coordinates and other relevant data from sensors installed on the buses and makes this information accessible to students via a web or mobile application.

### Features

- **Real-Time Tracking**: Get the current location of buses in real-time.
- **Historical Data**: Access the historical locations of the buses for any given day.
- **User-Friendly Interface**: Easy-to-navigate interface for students to check bus locations.
- **Reliable Data Storage**: Uses a robust database to store and retrieve location data efficiently.

### Technology Stack

- **Node.js**: A powerful JavaScript runtime built on Chrome's V8 engine, used for server-side scripting.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MySQL**: A relational database management system used for storing bus location data.
- **Sequelize**: An ORM for Node.js that makes it easy to work with MySQL by providing an abstraction layer that handles SQL queries.
## Endpoints

The system exposes several RESTful API endpoints for interacting with the bus tracking data. Below is documentation for the available endpoints:

* [locations](./docs/location.md)
* [routes](./docs/routes.md)
* [sensors](./docs/sensors.md)
* [stoppings](./docs/stoppings.md)


## Getting Started
* installing dependencies
```
npm install
```

* starting server
```
npm run start
```

---