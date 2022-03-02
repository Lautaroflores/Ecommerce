import React from 'react';
import  Navbar  from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer' 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartContextProvider>    
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>  
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
};

export default App;