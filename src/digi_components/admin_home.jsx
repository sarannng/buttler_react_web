import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter, Link , Routes, Route, useNavigate, Outlet} from "react-router-dom";
import Bigscreen from "./big-screen";

const AdminHome = ( ) =>{

    const vvavigator =    () =>{
        console.log("nav clickd");
    }
    return( 
 
       

        <div className="container">
            {/* <h1>This is Admin home</h1>
            <h3>It will have 2 buttons one for hte Bigscreen and other for calling the orders.</h3> */}

            <div className="row first-text">
                Welcome Aboard
            </div>

            
            <div className="row">
                <div className="col-6">
                    <Link to={"big-screen"}> hi</Link>
                </div>

                
                <div className="col-6">
                    <Link to={'calling-orders'}><Button onClick={ vvavigator} type='button' className = 'btn btn-secondary'>Update Menu</Button></Link>
                </div>
            </div>

            <hr />
            
            <div className="row">
                Updates section
                 
                  <Outlet/>
            </div>
        </div>
         

    );
}

export default AdminHome;