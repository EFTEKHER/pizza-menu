import React from "react";

import ReactDOM from "react-dom/client";

function App() {
  return <div>
  <h1>Hello React App !!!!</h1>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  </div>;
}

function Pizza()
{
  return <div>
  <img src="pizzas/spinaci.jpg" alt="Pizza Spinacci" />
  <h2>Pizza Spinacci</h2>
  <p>Tomato ,mozarella,spinach and ricottea cheese</p>
  </div>
}
//React 18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // it will render twice and find help to get bug
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);

/*
//React  before 18
React.Render(<App />    )

*/
