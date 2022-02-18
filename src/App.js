import React from 'react';
import  Navbar  from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer' 
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/> 
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;