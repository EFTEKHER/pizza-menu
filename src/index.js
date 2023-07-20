import React from "react";

import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React App !</h1>;
}
//React 18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode> // it will render twice and find help to get bug
    <App />
  </React.StrictMode>
);

/*
//React  before 18
React.Render(<App />    )

*/
