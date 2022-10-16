import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Zoom from './zoom';
import CardSkeleton from './component/SwipeScreenComponent/cardskeleton';
import BrandExample from './component/Navbar/navbar';
import ListTest from './component/SwipeScreenComponent/list-test';
import Login from './digi_components/login';
import {Route, Routes, Link,    BrowserRouter as Router} from 'react-router-dom';
import AdminHome from './digi_components/admin_home';
import Notfound from './digi_components/notfound';
import Bigscreen from './digi_components/big-screen';
import CallingOrders from './digi_components/calling-orders';
import Navbar from './component/Navbar/navbar';
import Menu from './digi_components/menu';

function App() {

  return ( 
    <>
  <Router>

    <div>
      {/* <ul>
        <li>
          <Link to = '/'>Login</Link>
        </li>

        <li>
          <Link to = '/adh'>Admin-Home</Link>
        </li>

        <li>
          <Link to = 'big-screen'>Bs</Link>
        </li>

        <li>
        <Notfound/>
        </li>
      </ul> */}

      <Navbar/>
     

      <Routes>
      
      <Route path= '/'  exact element ={<Login/>}/>
      <Route path= 'big-screen'    element ={<Bigscreen/>}/>
      <Route path= 'adh'    element ={<AdminHome/>}>
      
        

        <Route path = 'big-screen'    element= {<Bigscreen/>}/> 
        <Route path = 'calling-orders' element= {<CallingOrders/>}/> 
      </Route> 
      
      
      <Route path= 'calling-orders'    element ={<CallingOrders/>}/>
      <Route path= "menu" element = {<Menu/>}></Route>
      <Route path= '*'  element ={<Notfound/>}/>
 
    </Routes>
    </div>
    

    
  </Router>
  </>
  );
}

export default App;
