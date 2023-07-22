import React from "react";

import ReactDOM from "react-dom/client";
import './index.css';

function App() {
  return <div className="container">
 <Header/>
 <Menu/>
 <Pizza name="Pizza Spinacci" ingredient="Tomato ,mozarella,spinach and ricottea cheese" photoName="pizzas/spinaci.jpg" price={10}/>

 <Pizza name="Pizza Funghi" ingredient="Tomato ,mozarella,spinach and ricottea cheese" photoName="pizzas/funghi.jpg" price={23}/>


  <Footer/>
  </div>;
}

function Pizza(props)
{
  return <div className="pizza">
  <img src={props.photoName} alt={props.name} />
  <div>
  <h3>{props.name}</h3>
  <p>{props.ingredient}</p>
  <span>{props.price}</span>
  </div>
  
  </div>
}

function Header ()
{
  const HeadingStyle={color:'red', background:'whitesmoke',fontSize:'34px' ,fontFamily:'cursive'};
// return  <h1 style={{color:'red', background:'grey',fontSize:'34px' ,fontFamily:'cursive'}}>Fast React Pizza Co.</h1>
// return  <h1 style={HeadingStyle}>Fast React Pizza Co.</h1>
return  (
  <header  className="header footer">
  <h1>Fast React Pizza Co.</h1>
  </header>
)
}
function Menu()
{
return <main className="menu">
<h2>Our menu</h2>

</main>
}

function Footer()
{
// return React.createElement('footer', null,"we are currently open");
const hour= new Date().getHours();
// console.log(hour);
const openHour=12;
const closeHour=22;
const isOpen=hour>=openHour && hour<=closeHour;
console.log(isOpen);
// if(hour>=openHour && hour<=closeHour)
//   {
// alert("we are currently open");
//   }
//   else{
//     alert("We are currently closed");
//   }
return <footer className="footer">{
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
