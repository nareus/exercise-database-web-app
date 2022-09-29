import React, { Component } from "react";
import Tab from "./Tab";

function Tabs({ exercises }) {
  return exercises.map((e) => <Tab exercise={e} />);
}

export default Tabs;
