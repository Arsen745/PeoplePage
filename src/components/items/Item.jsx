import React, { useState } from 'react';
import './Item.css';

const Item = (props) => {
  const { setOpenCategory, text } = props;
  const [ShowCategory, setShowCategory] = useState(text);

  return (
    <div className='itemm'>
      <div onClick={() => {
        alert(`${text.name}: ${text.category}`);
        setOpenCategory(text.category);
      }} className="items">
        <a>{text.name}</a>
      </div>
    </div>
  );
};

export default Item;
