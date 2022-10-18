import {setDoc, deleteDoc, doc, collection, onSnapshot, getDoc, getDocs, getFirestore, addDoc, where, documentId} from "firebase/firestore";
import React from "react";
import {Table, Button} from "react-bootstrap";
import firebase_service from "../Service/firebase_service";
import {db} from  "../Service/firebase-config";
import { useState,  useEffect } from "react";

const AdminOrder = (props) =>{
  

  const shiftOrderToDelivered =   async (id) =>{
    console.log("shit")
    const fs = getFirestore();
       const data_to_move =  await getDoc( doc(fs, "order", id) )
       console.log(data_to_move.data()['cid']);

      const docid =  data_to_move.data()['cid'];
  
      try {
        await setDoc(doc(db, "delivered", docid), data_to_move.data() );

        // await db.collection("delivered").doc(docid).addDoc(data_to_move.data());
      } catch (error) {
        console.log(error);
      }
 
  }
  async function delet(id)  {
 

        console.log("document deleted with id  " + id);
        await deleteDoc(doc(db, "order", id));

      //   db.collection("test").doc(id).delete().then(() => {
      //     console.log("Document successfully deleted!");
      // }).catch((error) => {
      //     console.error("Error removing document: ", error);
      // });
         console.log("document deleted with id  " + id);
        }



    return (<>
    
    <div className="text-center mt-5">Current-Orders</div>
    <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>C Name</th>
                <th>Order Time</th>
                {/* <th>Order Time</th> */}
                <th>Token</th>
                {/* <th>Total</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {  props.listap.map((doc, index) => {
                return (
                  <tr key={doc.id }>
                     <td>{index + 1}</td>
                    {/* <td>{doc.data.cid}</td> */}
                    <td className="tile">{doc.data.cname}</td>
                    <td>{doc.data.ordertime}</td>  
                     {/* <td>{doc.data.caddress}</td> */}
                    <td>{doc.data.token}</td>
                    <td>
                       <Button
                        variant="secondary"
                        className="edit"
                        onClick={ (e)=> {
                          shiftOrderToDelivered(doc.id);
                        }}
                         
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="delete"
                       onClick={(e) => {delet(doc.id)}}
                      >
                        Delete
                      </Button>  
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table></>
        
    );
}

export default AdminOrder;