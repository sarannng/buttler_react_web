import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Zoom from './zoom';
import CardSkeleton from './component/SwipeScreenComponent/cardskeleton';
import BrandExample from './component/Navbar/navbar';
import ListTest from './component/SwipeScreenComponent/list-test';

function App() {

   const  [valname, setval] = useState(0);
     
   
  function increment(valname){
    setval(valname+1);
  }
  
  
  function decrement(valname){
    setval(valname - 1);
  }


  return ( 

    <div>
    <BrandExample/>
     {/* <CardSkeleton/> */}
     <div className='mb-3'></div>
     <ListTest/>

    </div>
 

      /* <div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         
          <button className="minus" onClick={ () => decrement(valname)} > -</button>
           {valname} 
          <button className= "plus"  onClick={ () => increment(valname)}> +</button>
           
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sarang
        </a>



        <div> 
          <Zoom valnameProp = {valname} incrementFun = {increment}  decrementFun = {decrement}  />
        </div>
      </header>
      
      <div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div> */ 

    
  );
}

export default App;
