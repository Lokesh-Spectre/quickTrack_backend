
### [< BACK](../readme.md)
# Location Controller Documentation

## Overview
This location controller provides endpoints to fetch live and historical location data for buses. The routes are defined using Express.js.

## Endpoints

### 1. Get Live Location by Bus Number
**Endpoint:** `GET /locations/live/:bus_no`

**Description:** Fetches the current location of a specified bus.

**Parameters:**
- `bus_no` (String): The bus number for which the live location is requested.

**Responses:**
- **200 OK**: Successfully retrieved the current location of the bus.
  ```json
  {
    "status": "success",
    "location": {
      "lat": 37.7749,
      "long": -122.4184,
      "alt": 30,
      "speed": 10
    }
  }
  ```
- **400 Bad Request**: The specified bus number is invalid.
  ```json
  {
    "status": "failed",
    "message": "Invalid Bus Number"
  }
  ```

**Example Request:**
```http
GET /locations/live/1
```

**Example Successful Response:**
```json
{
  "status": "success",
  "location": {
    "lat": 37.7749,
    "long": -122.4184,
    "alt": 30,
    "speed": 10
  }
}
```

### 2. Get All Live Locations
**Endpoint:** `GET /locations/live/`

**Description:** Fetches the current locations of all buses.

**Parameters:** None

**Responses:**
- **200 OK**: Successfully retrieved the current locations of all buses.
  ```json
  {
    "status": "success",
    "locations": {
      "1": {
        "lat": 37.7749,
        "long": -122.4184,
        "alt": 30,
        "speed": 10
      }
      // other buses...
    }
  }
  ```

**Example Request:**
```http
GET /locations/live/
```

**Example Successful Response:**
```json
{
  "status": "success",
  "locations": {
    "1": {
      "lat": 37.7749,
      "long": -122.4184,
      "alt": 30,
      "speed": 10
    }
  }
}
```

### 3. Get Historical Locations by Bus Number
**Endpoint:** `GET /locations/:bus_no`

**Description:** Fetches the historical location data for a specified bus.

**Parameters:**
- `bus_no` (String): The bus number for which the historical locations are requested.

**Responses:**
- **200 OK**: Successfully retrieved the historical location data of the bus.
  ```json
  {
    "status": "success",
    "history": [
      {
        "id": 1,
        "lat": "37.774900000000000",
        "long": "-122.418400000000000",
        "alt": "30.000000000000000",
        "bus_no": "1",
        "createdAt": "2024-06-18T09:55:02.000Z",
        "updatedAt": "2024-06-18T09:55:02.000Z"
      },
      {
        "id": 2,
        "lat": "37.774900000000000",
        "long": "-122.418400000000000",
        "alt": "30.000000000000000",
        "bus_no": "1",
        "createdAt": "2024-06-18T09:58:59.000Z",
        "updatedAt": "2024-06-18T09:58:59.000Z"
      }
    ]
  }
  ```
- **400 Bad Request**: The specified bus number is invalid.
  ```json
  {
    "status": "failed",
    "message": "Invalid Bus Number"
  }
  ```

**Example Request:**
```http
GET /locations/1
```

**Example Successful Response:**
```json
{
  "status": "success",
  "history": [
    {
      "id": 1,
      "lat": "37.774900000000000",
      "long": "-122.418400000000000",
      "alt": "30.000000000000000",
      "bus_no": "1",
      "createdAt": "2024-06-18T09:55:02.000Z",
      "updatedAt": "2024-06-18T09:55:02.000Z"
    },
    {
      "id": 2,
      "lat": "37.774900000000000",
      "long": "-122.418400000000000",
      "alt": "30.000000000000000",
      "bus_no": "1",
      "createdAt": "2024-06-18T09:58:59.000Z",
      "updatedAt": "2024-06-18T09:58:59.000Z"
    }
  ]
}
```

---
