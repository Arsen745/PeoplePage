import React, { useState, useEffect } from 'react';
import './PageCategories.css';
import { Carousel } from 'antd';
import { LuShoppingCart } from "react-icons/lu";
import Onas from '../onas/Onas';
import Card from '../cards/Card';

const url = 'https://66b47fde9f9169621ea332aa.mockapi.io/';

const PageCategories = (props) => {
    const { category, addToCart } = props;
    const [data, setData] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (category) {
            const fetchData = async () => {
                
                    const response = await fetch(`${url}${category}`);

                    const data = await response.json();
                    setData(data);
        
            };
            fetchData();
        }
    }, [category]);

    const handleAddToCart = (item) => {
        addToCart(item); 

        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
        }, 2000);
    };

    const contentStyle = {
        margin: 0,
        height: '400px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    return (
        <div className="contentpage">
            <div className="content-center">
                <div className="banner">
                    <Carousel arrows infinite autoplay autoplaySpeed={3000}>
                        <div>
                            <img style={contentStyle} src="https://www.networkyachtbrokers.com/wp-content/uploads/2013/10/1300x400-Plymouth-harbour.jpg" alt="Banner 1" />
                        </div>
                        <div>
                            <img style={contentStyle} src="https://uptoncountrypark.com/wp-content/uploads/2018/02/1300-x-400-IMG_95954.jpg" alt="Banner 2" />
                        </div>
                    </Carousel>
                </div>
                <div className="popular-tecnology"></div>
            </div>
            <div className="content-bottom">
                <div className="cardscenter">
                    {showSuccess && <Card text="Добавлено в корзины" />}
                    {Array.isArray(data) && data.map((el, index) => (
                        <div className="card" key={index}>
                            <div className="top-content">
                                <img src={el.image} alt={el.name} />
                            </div>
                            <div className="bottom-content">
                                <div className="top">
                                    <div className="name">
                                        <h4><span>Названия: </span>{el.name}</h4>
                                    </div>
                                    <div className="model">
                                        <h5><span>Модель: </span>{el.model}</h5>
                                    </div>
                                    <div className="price">
                                        <h3><span>Цена: </span>{el.price}</h3>
                                    </div>
                                    <div className="country">
                                        <h6><span>Производство: </span>{el.country}</h6>
                                    </div>
                                </div>
                                <div className="button">
                                    <button onClick={() => handleAddToCart(el)}>
                                        Добавить в корзину <LuShoppingCart className='icon-btn' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="content-onas">
                <Onas />
            </div>
        </div>
    );
}

export default PageCategories;
