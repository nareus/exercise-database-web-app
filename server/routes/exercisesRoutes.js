const express = require("express");
const router = require("express").Router();
const Exercises = require("../models/exercisesModel");
const ExerciseData = require("../data/exercises.json");

function checkReq(obj, query) {
  let a = obj.primaryMuscles.includes(query.muscleGroup.toLowerCase());
  let b = obj.level === query.level.toLowerCase();
  if (query.muscleGroup === "Any") {
    a = true;
  }
  if (query.level === "Any") {
    b = true;
  }
  return a && b && obj.name.toLowerCase().includes(query.name.toLowerCase());
}

router.use(express.json());

router.get("/", (req, res) => {
  res.send(ExerciseData);
});

router.get("/search", (req, res, next) => {
  console.log(ExerciseData.filter((obj) => checkReq(obj, req.query)));
  res.send(ExerciseData.filter((obj) => checkReq(obj, req.query)));
});

router.post("/create", (req, res, next) => {
  ExerciseData.push({
    name: req.body.name,
    level: req.body.level,
    primaryMuscles: [req.body.group],
    instructions: [req.body.instructions],
  });
});

module.exports = router;
