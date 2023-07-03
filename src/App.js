import React from 'react';
import Home from './Home';
import Cart from './Cart';
import TotalPrice from './component/totalprice';
// import Navbar from './component/navbar';
import Navbar from './component/navbar';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Navbar from './component/navbar';
// import { useSelector, useDispatch } from 'react-redux';
// import { Inc, Dec, Update_Number } from './states/reducers/index';

// const App = () => {
//   const myState = useSelector((state) => state.number);
//   const dispatch = useDispatch();

//   const handleIncreament = () => {
//     dispatch(Inc(Number(10) || 0));
//   };

//   const handleDecreament = () => {
//     dispatch(Dec(Number(5) || 0));
//   };

//   const handleInputChange = (event) => {
//     dispatch(Update_Number(Number(event.target.value)));
//   };
 const App = () => {
return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route> 
                <Route path='/cart' element={<Cart/>}></Route> 
                <Route path='/total' element={<TotalPrice/>}></Route>
            </Routes>
        </BrowserRouter>
       
      </div>
    </>

)
}

export default App;
