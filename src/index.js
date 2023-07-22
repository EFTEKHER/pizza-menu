import React from "react";

import ReactDOM from "react-dom/client";

function App() {
  return <div>
 <Header/>
 <Menu/>
  <Footer/>
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

function Header ()
{
return  <h1>Fast React Pizza Co.</h1>
}
function Menu()
{
return <div>
<h2>Our menu</h2>
<Pizza/>
<Pizza/>
<Pizza/>
</div>
}

function Footer()
{
// return React.createElement('footer', null,"we are currently open");
return <footer>{
  new Date().toLocaleTimeString()
} We are currently Open</footer>
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

/*
component 
--->data 
logic
apperance


jsx --extension of javascript that allows us to embedded JavaScript ,css and react components into html
React.createElement ---function called 
jsx-declarative syntax
//props and state
current data
abstraction away from DOM

*/
