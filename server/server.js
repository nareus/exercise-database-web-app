const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const ExerciseData = require("./data/exercises.json");
const app = express();
app.use(cors());

//connect
const mongoose = require("mongoose");

const url =
  "mongodb+srv://narens:beatit@cluster0.crple.mongodb.net/exercises_list?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

//Add data
// async function createMultipleListings(client, newListings) {
//   const result = await client
//     .db("exercise_list")
//     .collection("exercises")
//     .insertMany(newListings);
// }

const exercisesRouter = require("./routes/exercisesRoutes");
app.use("/api/exercises", exercisesRouter);

app.listen(process.env.PORT || 3001, () => console.log("listening"));
