import React, { useEffect, useState } from 'react';
import './Cards.css'; 
import { FaCircleCheck } from "react-icons/fa6";
const Card = (props) => {
  const {text, color} = props
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    isVisible && (
      <div className="succes-message" style={
        {
          background: color
        }
      }>
        <div className="content-succes">
          <h5>{text} <FaCircleCheck className="icon-succes" /></h5>
        </div>
      </div>
    )
  );
};

export default Card;
