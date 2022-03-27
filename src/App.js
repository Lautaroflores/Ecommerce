import React from 'react';
import  Navbar  from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer' 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {StoreProvider} from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
     <StoreProvider>    
      <BrowserRouter>
      <Navbar/> 
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='categoryId/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>  
        </Routes>
      </BrowserRouter>
     </StoreProvider>
  )
};

export default App;