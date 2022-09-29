import React, { Component } from "react";

function Tab({ exercise }) {
  return (
    <div className="tab">
      <div>{exercise.name}</div>
      <div>{exercise.primaryMuscles}</div>
      <div>{exercise.level}</div>
    </div>
  );
}

export default Tab;
