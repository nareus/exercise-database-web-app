import React, { Component } from "react";
import Navbar from "./Navbar";
import Tabs from "./Tabs";
import Filter from "./Filter";

function Search({ exercises, handleSearch }) {
  return (
    <div>
      <Filter handleSearch={handleSearch} />
      <Tabs exercises={exercises} />
    </div>
  );
}

export default Search;
