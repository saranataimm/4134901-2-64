import React from 'react';
import ReactDOM, { render } from 'react-dom';
import "./index.css";

import Car from "./Components/Car.js";
import List from "./Components/List.js";
import UL from "./Components/UL.js";
import Datatable from "./Components/Table.js";

ReactDOM.render(
    <>
      <Datatable />
      <Car age="age" eye="black" />
      <List />
      <UL />
    </>,
    document.getElementById("root")
);
//
