import React from "react";

function Bio(){
  const fName="Tharshajini";
  const lName="Vimalathas";
  const name="I'm Tharshajini Vimalathas from Sangaththanai.";
  const paragraph =(props)=>{
    return <div>{props.children}</div>
  }
  const element = React.createElement(
    "button",
    {
      className:"btn",
      onClick:()=> alert(`Welcome ${fName} ${lName}`),
    },
    "Click me"
  );
 return(
    <div>
        <paragraph>
            <p>{fName} {lName}</p>
            <div>
                {element}
            </div>
        </paragraph>
    </div>
 );

};

export default Bio;
