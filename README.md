# MongoDB Node.js CRUD API

This is a RESTful API built with Node.js and MongoDB for performing CRUD (Create, Read, Update, Delete) operations on a MongoDB database. The API provides endpoints to interact with the database and perform various operations on the data.

## Prerequisites

Before you can use this API, ensure that you have the following installed:

- Node.js (v14 or higher)
- MongoDB

## Installation

1. Clone the repository:

```shell
git clone https://github.com/usefsame7/Mongodb-Node.js-Curd-API.git
```

2. Navigate to the project directory:

```shell
cd Mongodb-Node.js-Curd-API
```

3. Install the dependencies:

```shell
npm install
```

4. Configure the database connection:

Edit the `config.js` file and update the MongoDB connection URL according to your environment.

5. Start the server:

```shell
npm start
```

The API will now be running on `http://localhost:3000`.

## API Endpoints

The following endpoints are available for interacting with the API:

- `GET /api/employees` - Retrieve all employees
- `GET /api/employees/:id` - Retrieve a specific employee by ID
- `POST /api/employees` - Create a new employee
- `PUT /api/employees/:id` - Update an employee by ID
- `DELETE /api/employees/:id` - Delete an employee by ID

## Request and Response Formats

### Employee Object

An employee object has the following structure:

```json
{
  "name": "John Doe",
  "designation": "Software Engineer",
  "salary": 5000
}
```

### Request Format

For creating or updating an employee, the request body should contain a JSON object with the employee data.

### Response Format

The API responses will be in JSON format.

## Examples

### Get all employees

```http
GET /api/employees
```

Response:

```json
[
  {
    "_id": "60a715b63a77d243d8fe8d0f",
    "name": "John Doe",
    "designation": "Software Engineer",
    "salary": 5000
  },
  {
    "_id": "60a715b63a77d243d8fe8d10",
    "name": "Jane Smith",
    "designation": "Product Manager",
    "salary": 7000
  }
]
```

### Get a specific employee

```http
GET /api/employees/60a715b63a77d243d8fe8d0f
```

Response:

```json
{
  "_id": "60a715b63a77d243d8fe8d0f",
