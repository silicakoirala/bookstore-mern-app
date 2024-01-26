import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import Book from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

//middleware for parsing req body
app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);
//creating a new route, first parameter is string for route, second is a call back function 
app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome to MERN stack tutorial');
});


app.use('/books', booksRoute);
//route

mongoose
  .connect(mongoDBURL) //to connect db
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => { //we want the express server to run only if the db is connected
      console.log(`App is listening top port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
