import React from 'react'
import './Onas.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { TbUserShield } from "react-icons/tb";
import { RiPercentLine } from "react-icons/ri";

const Onas = () => {
    return (
        <div className='onas-cards'>
            <div className="text-content-onas">
                <h1>Почему Именно Мы?</h1>
            </div>
            <div className="cards-onas">
                <div className="card-onas">
                    <div className="icon1">
                        <CiDeliveryTruck className='icons'/>
                    </div>
                    <div className="text-content-p">
                        <p>Бесплатная доставка во всех Кыргызстан</p>
                    </div>
                </div>
                <div className="card-onas">
                    <div className="icon1">
                    <RiPercentLine className='icons'/>

                    </div>
                    <div className="text-content-p">
                        <p>Дешевле</p>
                    </div>
                </div>
                <div className="card-onas">
                    <div className="icon1">
                        <TbUserShield  className='icons'/>
                    </div>
                    <div className="text-content-p">
                        <p>Долго Срочный Гарантия</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Onas