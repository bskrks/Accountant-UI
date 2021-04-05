import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

/* import React from 'react';
import ReactDOM from 'react-dom';
import './components/Form/index.jsx'
import './App.scss';

class MyHeader extends React.Component {
  render() {
    return (
      <div id="app"></div>
    );
   
}
}

ReactDOM.render(<MyHeader />, document.getElementById('root')); */