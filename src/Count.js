import React,{useEffect,useState} from "react";

function Count(){
    const [count,setCount] =useState(0,2);

    useEffect(()=>{
        const countTimer=setInterval(() =>{
            setCount(count=>count+2);
        },1000);

        return()=>clearInterval(countTimer);
           
     
},[]);

    return(
        <div>
            <p>count:{count}</p>

        </div>
    );



};
export default Count;
