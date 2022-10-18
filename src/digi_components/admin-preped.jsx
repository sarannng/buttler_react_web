import { deleteDoc, doc, collection, updateDoc} from "firebase/firestore";
import React from "react";
import {Table, Button} from "react-bootstrap";
import firebase_service from "../Service/firebase_service";
import {db} from  "../Service/firebase-config";

const AdminPrepared = (props) =>{
    
    async function delet(id)  {
        console.log("document deleted with id  " + id);
        await deleteDoc(doc(db, "delivered", id));

      //   db.collection("test").doc(id).delete().then(() => {
      //     console.log("Document successfully deleted!");
      // }).catch((error) => {
      //     console.error("Error removing document: ", error);
      // });
         console.log("document deleted with id  " + id);
        }

    async function callingUser(id)  {
      console.log("In calling user");
      const getUser = doc(db, 'delivered', id);
        await updateDoc(getUser, {
         trigger : true, 
        });

        setTimeout(() => {
          togglingbackfalse(id);
        }, 1000);
    }

    
    async function togglingbackfalse(id)  {
      
      const getUser = doc(db, 'delivered', id);
        await updateDoc(getUser, {
         trigger : false, 
        });
 
    }


    return (
<>
    
    <div className="text-center mt-5">Order-preped</div>
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
              {  props.list.map((doc, index) => {
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

                      <Button
                        variant="success"
                        className="Call"
                         onClick={(e) => {callingUser(doc.id)}}
                      >
                        Calling
                      </Button>  
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table></>
        
    );
}

export default AdminPrepared;