import React from 'react';
import ReactDOM, { render } from 'react-dom';
import "./index.css";

import Car from "./Components/Car.js";
import List from "./Components/List.js";
import UL from "./Components/UL.js";
import Datatable from "./Components/Table.js";
import Hook from "./Components/Hook";

ReactDOM.render(
    <>
      <Datatable />
      <Car age="age" eye="black" />
      <List />
      <UL />
      <Hook />
    </>,
    document.getElementById("root")
);
//
