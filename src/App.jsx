import React, { useState } from 'react';
import Header from './components/header/Header';
import './App.css';
import PageCategories from './components/page-categpries/PageCategories';
import Category from './components/list-category/category';
import Modal from './components/modal.cart/Modal';

const App = () => {
  const [GiveDataCategory, setGiveDataCategory] = useState("");
  const [DataModalCart, setDataModalCart] = useState([]);
  const [OpenModalButton, setOpenModalButton] = useState(false);
  const [dataGiveSearch, setDataGiveSearch] = useState([]);

  const closeModal = () => {
    setOpenModalButton(false);
  };

  const OpenModal = () => {
    setOpenModalButton(true);
  };

  const deleteFromCart = (itemToDelete) => {
    setDataModalCart(prevCart => 
      prevCart.filter(item => item !== itemToDelete)
    );
  };
  const addToCart = (newItem) => {
    setDataModalCart(prevCart => [...prevCart, newItem]);
  };
  console.log(dataGiveSearch + "Arsenchik");
  

  return (
    <>
      <div>
        <Header DataModalCartLenth={DataModalCart.length} OpenModal={OpenModal} dataSearch={DataModalCart}/>
      </div>
      <div className="home">
        <div className='categories'>
          <Category GiveDataCategory={setGiveDataCategory} setDataGiveSearch={setDataGiveSearch}/>
        </div>
        <div className="page-categories">
          <PageCategories 
            category={GiveDataCategory} 
            addToCart={addToCart}
            OpenModal={OpenModal} 
          />
        </div>
        <div className="modal">
          {OpenModalButton && (
            <Modal 
              DataModalCart={DataModalCart} 
              closeModal={closeModal} 
              deleteFromCart={deleteFromCart} 
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
