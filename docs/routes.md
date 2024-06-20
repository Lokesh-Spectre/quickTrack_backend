### [< BACK](../readme.md)
# Routes Controller Documentation

## Overview
This routes controller provides endpoints to perform CRUD operations on bus routes. The routes are defined using Express.js.

## Endpoints

### 1. Create a New Route
**Endpoint:** `POST /routes`

**Description:** Creates a new bus route.

**Request Body:**
- `route_no` (String): The route number.
- `route_name` (String): The name of the route.
- `bus_nos` (JSON): The list of bus numbers associated with this route (optional).

**Responses:**
- **201 Created**: Successfully created a new route.
  ```json
  {
    "id": 1,
    "route_no": "101",
    "route_name": "Downtown Express",
    "bus_nos": ["10", "20"],
    "createdAt": "2024-06-18T10:00:00.000Z",
    "updatedAt": "2024-06-18T10:00:00.000Z"
  }
  ```
- **500 Internal Server Error**: An error occurred while creating the route.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
POST /routes
Content-Type: application/json

{
  "route_no": "101",
  "route_name": "Downtown Express",
  "bus_nos": ["10", "20"]
}
```

### 2. Read All Routes
**Endpoint:** `GET /routes`

**Description:** Retrieves all bus routes.

**Responses:**
- **200 OK**: Successfully retrieved all routes.
  ```json
  [
    {
      "id": 1,
      "route_no": "101",
      "route_name": "Downtown Express",
      "bus_nos": ["10", "20"],
      "createdAt": "2024-06-18T10:00:00.000Z",
      "updatedAt": "2024-06-18T10:00:00.000Z"
    }
    // other routes...
  ]
  ```
- **500 Internal Server Error**: An error occurred while fetching the routes.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
GET /routes
```

### 3. Read a Single Route by ID
**Endpoint:** `GET /routes/:id`

**Description:** Retrieves a specific route by its ID.

**Parameters:**
- `id` (Integer): The ID of the route to be retrieved.

**Responses:**
- **200 OK**: Successfully retrieved the route.
  ```json
  {
    "id": 1,
    "route_no": "101",
    "route_name": "Downtown Express",
    "bus_nos": ["10", "20"],
    "createdAt": "2024-06-18T10:00:00.000Z",
    "updatedAt": "2024-06-18T10:00:00.000Z"
  }
  ```
- **404 Not Found**: The specified route ID does not exist.
  ```json
  {
    "error": "Route not found"
  }
  ```
- **500 Internal Server Error**: An error occurred while fetching the route.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
GET /routes/1
```

### 4. Update a Route by ID
**Endpoint:** `PUT /routes/:id`

**Description:** Updates a specific route by its ID.

**Parameters:**
- `id` (Integer): The ID of the route to be updated.

**Request Body:**
- `route_no` (String): The updated route number.
- `route_name` (String): The updated name of the route.
- `bus_nos` (JSON): The updated list of bus numbers associated with this route (optional).

**Responses:**
- **200 OK**: Successfully updated the route.
  ```json
  {
    "id": 1,
    "route_no": "101",
    "route_name": "Downtown Express",
    "bus_nos": ["10", "20"],
    "createdAt": "2024-06-18T10:00:00.000Z",
    "updatedAt": "2024-06-18T10:00:00.000Z"
  }
  ```
- **404 Not Found**: The specified route ID does not exist.
  ```json
  {
    "error": "Route not found"
  }
  ```
- **500 Internal Server Error**: An error occurred while updating the route.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
PUT /routes/1
Content-Type: application/json

{
  "route_no": "101",
  "route_name": "Downtown Express",
  "bus_nos": ["10", "20"]
}
```

### 5. Delete a Route by ID
**Endpoint:** `DELETE /routes/:id`

**Description:** Deletes a specific route by its ID.

**Parameters:**
- `id` (Integer): The ID of the route to be deleted.

**Responses:**
- **200 success**: Successfully deleted the route.
  ```json
  { 
    "message": "Route deleted"
  }
  ```
- **404 Not Found**: The specified route ID does not exist.
  ```json
  {
    "error": "Route not found"
  }
  ```
- **500 Internal Server Error**: An error occurred while deleting the route.
  ```json
  {
    "error": "Error message"
  }
  ```

**Example Request:**
```http
DELETE /routes/1
```

---
