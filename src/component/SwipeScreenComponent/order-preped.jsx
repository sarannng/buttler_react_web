import { deleteDoc, doc, collection} from "firebase/firestore";
import React from "react";
import {Table, Button} from "react-bootstrap";
import firebase_service from "../../Service/firebase_service";
import {db} from  "../../Service/firebase-config";

const OrderPrepd = (props) => {
    
    async function delet(id)  {
        console.log("document deleted with id  " + id);
        await deleteDoc(doc(db, "order  ", id));

      //   db.collection("test").doc(id).delete().then(() => {
      //     console.log("Document successfully deleted!");
      // }).catch((error) => {
      //     console.error("Error removing document: ", error);
      // });
         console.log("document deleted with id  " + id);
        }
    return (
        <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                {/* <th>Customer id</th> */}
                <th>Name</th>
                {/* <th>Order Time</th> */}
                <th>Token</th>
                {/* <th>Total</th>
                <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {  props.list.map((doc, index) => {
                return (
                  <tr key={doc.id }>
                     <td>{index + 1}</td>
                    {/* <td>{doc.data.cid}</td> */}
                    <td className="customer-name">{doc.data.cname}</td>
                    {/* <td>{doc.data.ordertime}</td> */}
                    {/* <td>{doc.data.caddress}</td> */}
                    <td className="customer-token">{doc.data.total}</td>
                    <td>
                      {/* <Button
                        variant="secondary"
                        className="edit"
                       // onClick={(e) => getBookId(doc.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        className="delete"
                       onClick={(e) => {delet(doc.id)}}
                      >
                        Delete
                      </Button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
    );
}


export default OrderPrepd;