const express = require("express")
const mongoose = require("mongoose")
const app = express()
const Book = require('./models/booksModels')
require('dotenv').config()



  app.listen(3000, () => {
      console.log("Server is running on port 3000 ...");
    });
   
     mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Database Connected ...");
      }
    );


// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



  // get all books
  app.get('/',  (req, res) => {
   Book.find({}, (error, list) => {
    res.json(list);
  });
});


    // add new book
   app.post('/',  (req, res) => {
  const book = new Book(req.body);
   
   book.save()
   res.status(201).json(book);
   
});


  // update a specific book by id     
  app.post('/update/:id', (req, res) => {
   let id = req.params.id;
     Book.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      author: req.body.author,
    },
    (error, result) => {
      if (error || !result) {
        res.json({ message: error.message })
      }
      res.json(result);
    }
  );
});


  //  delete a specific book by id 
  app.post('/delete/:id', (req, res) => {
       let id = req.params.id;
         Book.findByIdAndRemove(id, (err, result) => {
            if (err) {
             res.json({ message: err.message });
             }
             res.json({ message: 'book deleted'});     
         })
      });

