import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />

      {/* <Pizza name="Pizza Spinacci" ingredient="Tomato ,mozarella,spinach and ricottea cheese" photoName="pizzas/spinaci.jpg" price={10}/>

 <Pizza name="Pizza Funghi" ingredient="Tomato ,mozarella,spinach and ricottea cheese" photoName="pizzas/funghi.jpg" price={23}/> */}

      <Footer />
    </div>
  );
}

function Pizza(props) {
  console.log(props);
  if(props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img
        src={props.pizzaObj.photoName}
        alt={props.pizzaObj.name}
        onClick={(e) => alert(`You want to order ${props.pizzaObj.name}`)}
      />
      <div>
        <h3 onDoubleClick={(e) => alert(`this is ${props.pizzaObj.name}`)}>
          {props.pizzaObj.name}{" "}
        </h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

function Header() {
  // const HeadingStyle={color:'red', background:'whitesmoke',fontSize:'34px' ,fontFamily:'cursive'};
  // return  <h1 style={{color:'red', background:'grey',fontSize:'34px' ,fontFamily:'cursive'}}>Fast React Pizza Co.</h1>
  // return  <h1 style={HeadingStyle}>Fast React Pizza Co.</h1>
  return (
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas=[];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((item) => {
            //  return   <Pizza key={item.name}  photoName={item.photoName} name={item.name} price={item.price} ingredient={item.ingredients} />
            return <Pizza pizzaObj={item} key={item.name} />;
          })}
        </ul>
      ) : (
        <p>We 're still working on Our Menu. Please Come back Later!</p>
      )}
    </main>
  );
}

function Footer() {
  // return React.createElement('footer', null,"we are currently open");
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(hour>=openHour && hour<=closeHour)
  //   {
  // alert("we are currently open");
  //   }
  //   else{
  //     alert("We are currently closed");
  //   }
  return (
    <footer className="footer">
      {isOpen && (
        <Order closeHour={closeHour}/>
      )}{" "}
    </footer>
  );
}
//React 18
function Order(props)
{
  return(
  <div className="order">
  <p>
    we are open until {props.closeHour}:00. Come Visit us or order Online{" "}
  </p>
  <button className="btn">order</button>
</div>)
}
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
