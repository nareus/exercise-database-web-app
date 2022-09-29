import React, { Component, useState } from "react";

function Create({ createExercise }) {
  const [name, setName] = useState("");
  const [muscleGroup, setMuscleGroup] = useState("");
  const [level, setLevel] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleMuscleGroup = (event) => {
    setMuscleGroup(event.target.value);
  };

  const handleLevel = (event) => {
    setLevel(event.target.value);
  };

  const handleInstructions = (event) => {
    setInstructions(event.target.value);
  };

  const handleClick = () => {
    createExercise(name, muscleGroup, level, instructions);
  };

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Name of Exercise"
          aria-label="Enter Exercise"
          aria-describedby="basic-addon2"
          onChange={handleName}
        />
      </div>

      <div class="form-group" onChange={handleMuscleGroup}>
        <label for="exampleFormControlSelect1">Muscle Group</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Choose</option>
          <option>Chest</option>
          <option>Shoulders</option>
          <option>Forearms</option>
          <option>Biceps</option>
          <option>Triceps</option>
          <option>Traps</option>
          <option>Middle Back</option>
          <option>Lower Back</option>
          <option>Lats</option>
          <option>Quadriceps</option>
          <option>Glutes</option>
          <option>Hamstrings</option>
          <option>Calves</option>
        </select>
      </div>

      <div class="form-group" onChange={handleLevel}>
        <label for="exampleFormControlSelect1">Level</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Choose</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
      </div>

      <div class="form-group">
        <label>Instructions</label>
        <input
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={handleInstructions}
        ></input>
      </div>

      <div className="create-button" onClick={handleClick}>
        <button type="button" class="btn btn-dark">
          Create Exercise
        </button>
      </div>
    </div>
  );
}

export default Create;
