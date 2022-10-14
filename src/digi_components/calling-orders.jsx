import React from "react";
import AdminOrder from "./admin-orders";
import AdminPrepared from "./admin-preped";
import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import {Table, Button } from 'react-bootstrap';
import firebase_service from "../Service/firebase_service";
  
import {db} from  "../Service/firebase-config";

 
 


const CallingOrders = ( ) => {


  const [newOrders, setnewOrders] = useState([]);
  const [newReadyOrders, setNewReadyOrders] = useState([]);

  useEffect(()=>{
    getNewOrders();
    getReadyOrders();
    console.log("useeffect called!")
  } , []);  

  const getNewOrders = () => {
    onSnapshot(collection(db, "order"), snapshot =>{
      setnewOrders(snapshot.docs.map((doc) =>({
        id: doc.id,
        data: doc.data(),
      })))
    })
 
    console.log(newOrders);
  } 

  const getReadyOrders = () =>{
    onSnapshot(collection(db, "delivered"), snapshot =>{
      setNewReadyOrders(snapshot.docs.map((doc) =>({
        id: doc.id,
        data: doc.data(),
      })))
    })
  
    console.log(newReadyOrders);
  }
  

    return(
<div className="container">
         <div className="row">
            <div className="col-lg-6"> 
            <AdminOrder listap = {newOrders}/>
            </div>

            <div className="col-lg-6"> 
            <AdminPrepared list = {newReadyOrders}/>
            </div>
            

        <div><Button onClick={getReadyOrders}></Button></div>

            {/* <div className="col-lg-4"> 
            <OrderCards list = {orders}/>
            </div>
            
            <div className="col-lg-4"> 
            <OrderCards list = {orders}/>
            </div> */}
          </div>
         </div>  );
}

export default CallingOrders;