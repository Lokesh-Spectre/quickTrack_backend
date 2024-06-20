### [< BACK](../readme.md)
# Sensors Controller Documentation

## Overview
This sensors controller provides an endpoint to record sensor data for buses. The route is defined using Express.js.

## Endpoints

### 1. Record Sensor Data
**Endpoint:** `POST /sensors`

**Description:** Records the sensor data for a specified bus, updates the current locations, and stores the location history.

**Request Body:**
- `sensNo` (String): The sensor number.
- `lat` (String): The latitude of the bus.
- `long` (String): The longitude of the bus.
- `alt` (String): The altitude of the bus.
- `bus_no` (String): The bus number.
- `speed` (Number): The speed of the bus.

**Responses:**
- **200 OK**: Successfully recorded the sensor data and updated the current location.
  ```json
  {
    "success": true,
    "message": "successfully recorded"
  }
  ```
- **500 Internal Server Error**: An error occurred while recording the sensor data.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
POST /sensors
Content-Type: application/json

{
  "sensNo": "SN001",
  "lat": "37.7749",
  "long": "-122.4194",
  "alt": "30",
  "bus_no": "1",
  "speed": 10
}
```

**Example Successful Response:**
```json
{
  "success": true,
  "message": "successfully recorded"
}
```

---