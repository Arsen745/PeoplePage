import React, { useState } from 'react';
import './Header.css';
import { LuShoppingCart } from 'react-icons/lu';
import { GrTechnology } from 'react-icons/gr';
import { MdClear } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
    const [isFlexVisible, setFlexVisible] = useState(false);

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

    return (
        <>
            <div className='header-container'>
                <div className='left-content-header'>
                    <div className='logo'>
                        <GrTechnology />
                    </div>
                    <div className='forms'>
                        <div className='burger-menu'>
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
                        <div className='count-cart'>
                            <h5>15</h5>
                        </div>
                        <button onClick={toggleFlex}>
                            <IoSearchOutline />
                        </button>
                        <button>
                            <LuShoppingCart />
                        </button>
                    </div>
                </div>
            </div>
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
