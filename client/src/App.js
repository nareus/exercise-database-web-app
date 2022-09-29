import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Search from "./components/Search";
import Create from "./components/Create";

function App() {
  const [exercises, setExercises] = useState([]);

  // useEffect(() =>
  //   axios.get("http://localhost:3001/api/exercises/").then((res) => {
  //     const newExercises = res.data;
  //     setExercises(newExercises);
  //   })
  // );

  function handleSearch(name, group, level) {
    axios
      .get("http://localhost:3001/api/exercises/search", {
        params: { name: name, muscleGroup: group, level: level },
      })
      .then((res) => {
        setExercises(res.data);
        console.log(res.data);
      });
  }

  const createExercise = (name, group, level, instructions) => {
    console.log(name);
    axios
      .post("http://localhost:3001/api/exercises/create", {
        name: name,
        group: group,
        level: level,
        instructions: instructions,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search" exact>
            <Search exercises={exercises} handleSearch={handleSearch} />
          </Route>
          <Route path="/create">
            <Create createExercise={createExercise} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
