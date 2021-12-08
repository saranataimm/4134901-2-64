import React from 'react';
import ReactDOM, { render } from 'react-dom';
import "./index.css";

import Car from "./Components/Car.js";
import List from "./Components/List.js";

ReactDOM.render(
    <>
      <Car age="age" eye="black" />
      <List />
    </>,
    document.getElementById("root")
);

// reportWebVitals();
