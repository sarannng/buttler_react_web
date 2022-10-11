 import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    getFirestore,
   onSnapshot,
   deleteDoc,
   
     
 } from "firebase/firestore";

 import {db} from  "./firebase-config";


 const collect = collection(db, "test");
 const ordercol = collection(db, "order");

 class FirebaseService {      

    async addTest(obj){
         return  await addDoc(collect, obj);
        console.log(obj);
    }

    async getAllTest(obj){
        // return await getDocs(collect);
        return await onSnapshot(ordercol);
        console.log(db.collection("order").getDocs);
    }

    async getAllOrders(obj){
    //  return await getDocs(ordercol);
       return await onSnapshot(ordercol);   
    }

    async deleteOrder(obj){
      return await deleteDoc(obj);
    }
 }

setInterval(FirebaseService.getAllOrders, 100);
 export default new FirebaseService();
  