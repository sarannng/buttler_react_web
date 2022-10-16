import { onSnapshot, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Service/firebase-config";

const Menu = () =>{

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        getMenu();
    },[]);


    const getMenu = () =>{
        onSnapshot(collection(db, "root"), snapshot =>{
            // setMenu(snapshot.docs.map((doc) =>({
            //     id: doc.id,
            //     data: doc.data()
            // })))

            setMenu(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })));
        })

        console.log(menu.data);
    }
    return(
    <div className="container">
            <button className="bg-primary" onClick={getMenu}  >Hit me</button>
    </div>
);
}

export default Menu;