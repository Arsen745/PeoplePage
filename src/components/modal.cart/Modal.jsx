import React, { useState } from 'react';
import './Modal.css';
import { IoMdClose } from 'react-icons/io';
import Card from '../cards/Card';

const Modal = (props) => {
  const { DataModalCart, closeModal, deleteFromCart } = props;
  const [succesDelete, setsuccesDelete] = useState(false);

  const handleDelete = (el) => {
    deleteFromCart(el);
    setsuccesDelete(true);
    setTimeout(() => setsuccesDelete(false), 2000); 
  };

  return (
    <div className='containerModal'>
      <div className="content">
        <div className="center-card">
          <div className="cards-modal">
            <div className="close-modal" onClick={closeModal}>
              <IoMdClose />
            </div>
            {succesDelete && <Card text="Удалено из корзины" color='red'/>}
            {DataModalCart.map((el, index) => {
              return (
                <div className="card-modal" key={index}>
                  <div className="image">
                    <img src={el.image} alt="" />
                  </div>
                  <div className="text-content-card-modal">
                    <div className="name">
                      <h5><span>Названия: </span>{el.name}</h5>
                    </div>
                    <div className="model">
                      <h5><span>Модель: </span>{el.model}</h5>
                    </div>
                    <div className="price">
                      <h4><span>Цена: </span>{el.price}</h4>
                    </div>
                    <div className="country">
                      <h5><span>Производство: </span>{el.country}</h5>
                    </div>
                    <div className="description">
                      <span>О товаре: </span>
                      <h5>{el.description}</h5>
                    </div>
                    <button>Оформить Заказ</button>
                    <button onClick={() => handleDelete(el)}>Удалить из корзины</button> {/* Вызов handleDelete */}
                  </div>
                </div>
              );
            })}
            {DataModalCart.length === 0 ? (
              <div>Корзина пуста</div>
            ): null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
