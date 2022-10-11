import React from "react"; 
import firebase_service from "../../Service/firebase_service";

const CardSkeleton = () =>{

  function sendtest()   {
    const obj = {
      name: "sarang",
      age: 23
    }

    firebase_service.addTest(obj);
    console.log("buttonclicked");
  }
    return (
         
        <div  className="container cardsize">

          

<div class="card mb-4 mt-5">
<button onClick={sendtest} >Send Test Data </button>
        {/* <div class="card-header">
          Featured
        </div>
        <div class="card-body">
          <h5 class="card-title">Spe  title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary" onClick={sendtest}>What' </a>
        </div> */}
      </div>
        </div>
    );
}

export default CardSkeleton;