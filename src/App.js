import react from "react";
import theme from "./logo.jpeg"

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
  
  return (
    <welcome>
      
      <h1>{message}</h1>
      <div>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      {image}
    </welcome>
  );
}

export default App;
