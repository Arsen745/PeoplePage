import React, { useState, useEffect } from 'react';
import './Header.css';
import { LuShoppingCart } from 'react-icons/lu';
import { GrTechnology } from 'react-icons/gr';
import { MdClear } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import Category from '../list-category/category';


const url = 'https://66b47fde9f9169621ea332aa.mockapi.io/Fridge';


const Header = (props) => {
    const { DataModalCartLenth, OpenModal, dataSearch } = props
    const [isFlexVisible, setFlexVisible] = useState(false);
    const [showCategory, setShowCategory] = useState(false);
    const handleBurgerClick = () => {
        setShowCategory(!showCategory);
    };


    const toggleFlex = () => {
        setFlexVisible(!isFlexVisible);
    };
    const [flexInput, setFlexInput] = useState('')
    const ShowIcon = (event) => {
        setFlexInput(event.target.value)
    }
    const ClearInput = () => {
        setFlexInput('')
    }

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(url);

            const data = await response.json();

        };
        fetchData();

    }, []);

    return (
        <>
            <div className='header-container'>
                <div className='left-content-header'>
                    <div className='logo'>
                        <GrTechnology />
                    </div>
                    <div className='forms'>
                        <div onClick={handleBurgerClick} className='burger-menu'>
                            <RxHamburgerMenu />
                        </div>
                        <input onChange={ShowIcon} value={flexInput} type='text' placeholder='Введите текст...' />
                        {flexInput && (
                            <MdClear className='clear' onClick={ClearInput} />

                        )}
                        <button>Поиск</button>
                    </div>

                </div>
                <div className='right-content-header'>
                    <div className='cart'>
                        <div className='count-cart' onClick={OpenModal}>
                            <h5>{DataModalCartLenth}</h5>
                        </div>
                        <button onClick={toggleFlex}>
                            <IoSearchOutline />
                        </button>
                        <button onClick={OpenModal}>
                            <LuShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
            {showCategory && <Category />}
            {isFlexVisible && (
                <div className='input-flex'>
                    <input onChange={ShowIcon} value={flexInput} type='text' placeholder='Введите текст...' />

                    {flexInput && (
                        <MdClear className='clear' onClick={ClearInput} />

                    )}
                    <button>Поиск</button>
                </div>
            )}
        </>
    );
};

export default Header;
