### [< BACK](../readme.md)
# stoppings Controller Documentation

## Overview
This stoppings controller provides endpoints to perform CRUD operations on bus stoppings. The stoppings are defined using Express.js.

## Endpoints

### 1. Create a New stopping
**Endpoint:** `POST /stoppings`

**Description:** Creates a new bus stopping.

**Request Body:**
- `lat` (String): The latitude of the bus.
- `long` (String): The longitude of the bus.
- `alt` (String): The altitude of the bus.
- `bus_no` (String): The bus number.

**Responses:**
- **201 Created**: Successfully created a new stopping.
  ```json
  {
    "id": 2,
    "lat": 0.234612345,
    "long": 0.9837856754,
    "alt": 0.21341234524,
    "bus_no": "9A",
    "route_id": 1,
    "updatedAt": "2024-06-26T06:45:43.863Z",
    "createdAt": "2024-06-26T06:45:43.863Z"
}
  ```
- **500 Internal Server Error**: An error occurred while creating the stopping.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
POST /stoppings
Content-Type: application/json

{
    "lat":0.234612345,
    "alt":0.21341234524,
    "long":0.9837856754,
    "bus_no":"9A"
}
```

### 2. Read All stoppings
**Endpoint:** `GET /stoppings`

**Description:** Retrieves all bus stoppings.

**Responses:**
- **200 OK**: Successfully retrieved all stoppings.
  ```json
  [
    {
        "lat":0.234612345,
        "alt":0.21341234524,
        "long":0.9837856754,
        "bus_no":"9A"
    }
    // other stoppings...
  ]
  ```
- **500 Internal Server Error**: An error occurred while fetching the stoppings.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
GET /stoppings
```

### 3. Read a Single stopping by ID
**Endpoint:** `GET /stoppings/:id`

**Description:** Retrieves a specific stopping by its ID.

**Parameters:**
- `id` (Integer): The ID of the stopping to be retrieved.

**Responses:**
- **200 OK**: Successfully retrieved the stopping.
  ```json
  {
    "lat":0.234612345,
    "alt":0.21341234524,
    "long":0.9837856754,
    "bus_no":"9A"
    }
  ```
- **404 Not Found**: The specified stopping ID does not exist.
  ```json
  {
    "error": "stopping not found"
  }
  ```
- **500 Internal Server Error**: An error occurred while fetching the stopping.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
GET /stoppings/1
```

### 4. Update a stopping by ID
**Endpoint:** `PUT /stoppings/:id`

**Description:** Updates a specific stopping by its ID.

**Parameters:**
- `id` (Integer): The ID of the stopping to be updated.

**Request Body:**
- `lat` (String): The latitude of the bus.
- `long` (String): The longitude of the bus.
- `alt` (String): The altitude of the bus.
- `bus_no` (String): The bus number.

**Responses:**
- **200 OK**: Successfully updated the stopping.
  ```json
  {
    "lat":0.234612345,
    "alt":0.21341234524,
    "long":0.9837856754,
    "bus_no":"9A"
    }
  ```
- **404 Not Found**: The specified stopping ID does not exist.
  ```json
  {
    "error": "stopping not found"
  }
  ```
- **500 Internal Server Error**: An error occurred while updating the stopping.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
PUT /stoppings/1
Content-Type: application/json

{
  "route_no": "101",
  "route_name": "Downtown Express",
  "bus_nos": ["10", "20"]
}
```

### 5. Delete a stopping by ID
**Endpoint:** `DELETE /stoppings/:id`

**Description:** Deletes a specific stopping by its ID.

**Parameters:**
- `id` (Integer): The ID of the stopping to be deleted.

**Responses:**
- **200 success**: Successfully deleted the stopping.
  ```json
  { 
    "message": "stopping deleted"
  }
  ```
- **404 Not Found**: The specified stopping ID does not exist.
  ```json
  {
    "error": "stopping not found"
  }
  ```
- **500 Internal Server Error**: An error occurred while deleting the stopping.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
DELETE /stoppings/1
```

---
