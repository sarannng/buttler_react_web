import { collection, onSnapshot, orderBy } from "firebase/firestore";
import React from "react";
import { useEffect, useState } from "react";
import {Table, Button } from 'react-bootstrap';
import firebase_service from "../../Service/firebase_service";
import OrderCards from "./order-cards";
import ordercol from "../../Service/firebase_service";

import {db} from  "../../Service/firebase-config";
import OrderPrepd from "./order-preped";

const ListTest = () => {

    //. const [list, setList] = useState([]);
    const [orders, setordersList] = useState([]);
    const [newReadyOrders, setNewReadyOrders] = useState([]);

    // useEffect(() =>{
    //     //getBooks();
    // }, []);
    // const getBooks = async () => {
    //     const data = await firebase_service.getAllTest();
    //     console.log(data.data());
    //    //  setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   };



      useEffect(()=> {
        getOrders();
        getReadyOrders();
      }, [] );
    
      const getOrders = async ()=>{

        onSnapshot(collection(db, "order"  ), snapshot => {
          setordersList(snapshot.docs.map((doc) => ({
            id: doc.id,
            data :  doc.data()
          })))
        } )
      //  const data = await firebase_service.getAllOrders();
      //   console.log(data.docs);

      //   setordersList(data.docs.map((doc) => 
      //   (
      //     {
      //       ...doc.data(), id: doc.id
      //     }
      //   )))
      // }

    //   const deleteHandler = async (id) => {
    //     await BookDataService.deleteBook(id);
    //     getBooks();
     };



     const getReadyOrders = () =>{
      onSnapshot(collection(db, "delivered"), snapshot =>{
        setNewReadyOrders(snapshot.docs.map((doc) =>({
          id: doc.id,
          data: doc.data(),
        })))
      })
    
      console.log(newReadyOrders);
    }
      return (
        <>
          {/* <div className="container">
          <div className=" ml-auto ">
            <Button variant="dark edit" onClick={getOrders}>
              Refresh List
            </Button>
          </div>
          </div> */}
    
          {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
          {/* <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Book Title</th>
                <th>Book Author</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {  list.map((doc, index) => {
                return (
                  <tr key={doc.id}>
                    <td>{index + 1}</td>
                    <td>{doc.name}</td>
                    <td>{doc.age}</td>
                    <td>{doc.age}</td>
                    <td>
                      <Button
                        variant="secondary"
                        className="edit"
                       // onClick={(e) => getBookId(doc.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="delete"
                       // onClick={(e) => deleteHandler(doc.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table> */}

         <div className="container mt-3">
         <div className="row">
            <div className="col-lg-6">
              <h4> New-Orders</h4> 
            <OrderCards list = {orders}/>
            </div>

            <div className="col-lg-6">
              <h4>Preped-orders</h4> 
            <OrderPrepd list = {newReadyOrders}/>
            </div>
            
            {/* <div className="col-lg-4"> 
            <OrderCards list = {orders}/>
            </div>
            
            <div className="col-lg-4"> 
            <OrderCards list = {orders}/>
            </div> */}
          </div>
         </div>
        </>
        
      ); 
};

// setInterval(ListTest, 1000);
// setImmediate( );

export default ListTest; 