import { render } from "@testing-library/react";
import React, { useState } from "react";
import '../digi_components/login.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import AdminHome from "./admin_home";
import Notfound from "./notfound";

function Login(){

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    // function submitclicked(event){
    
    // }

    const changehandlerEmail = (event)  => {
        setemail(event.target.value);
        console.log("Email: " + event.target.value);

      //<Link to = '/admin-home'></Link>


    }

    const changehandlerPassword = (event) => {
        setPassword(event.target.value);
        console.log("Pass :" + event.target.value);
    }

    const submitclicked= () => {
        console.log(":sdfsdfsdff")
        console.log("This are email " + email  + " and password " + password);
 

    }

    return(

<>
<div className="container" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}>


            
            <div className="row">
                {/* <div className="col-3">
                    <div className="container">
                    <img className="imgsize" src="https://images.freeimages.com/images/large-previews/543/vinyl-record-1308613.jpg" alt="Image" />
                
                    </div>
                  </div> */}

            <div className="col-12">
            <form> 
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1"  value={email} class="form-control" onChange={changehandlerEmail} />
   
  </div>
 
  <div class="form-outline mb-4">
  <label class="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" class="form-control" value={password} onChange={changehandlerPassword} />
    
  </div>
 
  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
     
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col"> 
      <a href="#!">Forgot password?</a>
    </div>
  </div> 

              {/* <div>Test</div>
              <Notfound/> */}
  <Link to={'adh'}>
  <button type="button" class="btn btn-danger btn-block mb-4"  onClick=  {submitclicked }>Sign in</button>
  </Link>
 
  
  <div class="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
            </div>
            </div>
        </div>

</>
    );
}   

export default Login;