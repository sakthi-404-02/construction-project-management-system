import React,{use, useState} from "react";

function MyComponent(){
    const [name,setName] = useState("Guest");
    const [age,setAge] = useState(0);
    const updateName = ()=>{
        setName("sakthi")
    }
    const updateAge = ()=>{
        setAge(age + 1);
    }
    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button><br></br>
            <p>age : {age}</p>
            <button onClick={updateAge}>Update Age</button><br></br>
            
        </div>
    )
}
export default MyComponent;
