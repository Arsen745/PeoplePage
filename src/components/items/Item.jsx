import React from 'react';
import './Item.css';

const Item = (props) => {
  const { setOpenCategory, text, isActive } = props;

  return (
    <div className='itemm'>
      <div
        onClick={() => {
          setOpenCategory(text.category); 
        }}
        className={`items ${isActive ? 'clicked' : ''}`} 
      >
        <a>{text.name}</a>
      </div>
    </div>
  );
};

export default Item;
