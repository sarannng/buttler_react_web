import React from "react";
import { useState } from "react";

const Zoom  = (props)  => {


  //  const [name, setName] = useState("From State Sarang");
    const myname = "Sarang";
  
   
    return(
     
        <div> 
            <h1>Zoom </h1>
              <button className="minus"  onClick={ ()=> props.decrementFun(props.valnameProp )}  > -</button>
              {props.valnameProp}
          <button className= "plus"  onClick={ ()=> props.incrementFun(props.valnameProp )}  > +</button>
        
        </div>
    );
}


export default Zoom;