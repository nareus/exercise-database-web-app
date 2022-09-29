import React, { Component } from "react";
import { useEffect, useState } from "react";

function Filter({ handleSearch }) {
  const [searchText, setSearchText] = useState("");
  const [searchGroup, setSearchGroup] = useState("Any");
  const [searchLevel, setSearchLevel] = useState("Any");

  function handleTextChange(event) {
    setSearchText(event.target.value);
  }

  function handleClick() {
    handleSearch(searchText, searchGroup, searchLevel);
  }

  function handleMuscleChange(event) {
    setSearchGroup(event.target.value);
  }

  function handleLevelChange(event) {
    setSearchLevel(event.target.value);
  }

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Exercise"
          aria-label="Enter Exercise"
          aria-describedby="basic-addon2"
          onChange={handleTextChange}
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>
      <div class="form-group" onChange={handleMuscleChange}>
        <label for="exampleFormControlSelect1">Muscle Group</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Any</option>
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
      <div class="form-group" onChange={handleLevelChange}>
        <label for="exampleFormControlSelect1">Level</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Any</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Expert</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
