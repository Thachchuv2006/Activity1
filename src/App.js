import React from "react";
import theme from "./logo.jpeg"
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const message ="About me";
  const greeting="Hello,"
  const name="I'm Tharshajini Vimalathas from Sangaththanai.";
  
  const fName="Tharshajini";
  const lName="Vimalathas";
  const description=`this is ${fName} ${lName}`;
  const image= <img src={theme} alt="theme for website"/>;

  const welcome =(props) => {
    return <div>{props.children}</div>
  };
  
  const element = React.createElement(
    "button",
    {
      className:"btn",
      onClick:()=> alert("Clicked!"),
    },
    "Click me"
  );

  return (
    <welcome>
      
      <h1>{message}</h1>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      {image}
      <div>{element}</div>
    </welcome>
  );
}

export default App;
