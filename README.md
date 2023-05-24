# Books API

The Books Project is a Node.js-based API that allows you to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB database for managing books. This API provides endpoints to interact with the database and perform various operations on book data.

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

- `GET /all_books` - Retrieve all books
- `POST /new_book` - Create a new book
- `POST /update/:id` - Update a book by ID
- `DELETE /delete/:id` - Delete a book by ID

## Request and Response Formats

### Book Object

A book object has the following structure:

```json
{
  "name": "Book name",
  "author": "Author Name",
}
```

### Request Format

For creating or updating a book, the request body should contain a JSON object with the book data.

### Response Format

The API responses will be in JSON format.

## Examples

### Get all books

```http
GET /all_books
```

Response:

```json
[
  {
    "_id": "60a715b63a77d243d8fe8d0f",
    "name": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
  },
  {
    "_id": "60a715b63a77d243d8fe8d10",
    "name": "To Kill a Mockingbird",
    "author": "Harper Lee",
  }
]
```

### add a new Book

```http
POST /new_book
```
request body: 
```json
{
  "name":"Atomic Habits",
  "auther":"james clear"
}
```

**Thanks For Reading . Regards.Y**
