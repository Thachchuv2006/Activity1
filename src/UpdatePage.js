import React,{useEffect,useState} from "react";

function UpdatePage(){
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const[currentDate,setCurrentDate] = useState(new Date().toLocaleDateString());

    useEffect(()=>{
        const timer =setInterval(() =>{
            setCurrentTime(new Date().toLocaleTimeString());
        },1000);

        const date =setInterval(() =>{
            setCurrentDate(new Date().toLocaleDatetring());
        });

    return()=> clearInterval(timer);
    },[]);

return(
    <div>
        <h1>Welcome to the React Timezone</h1>
        <p>Current Time: {currentTime}</p>
        <p>Current Date: {currentDate}</p>
    </div>
)

};

export default UpdatePage;
