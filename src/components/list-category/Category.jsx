import React, { useState, useEffect } from 'react';
import './Category.css';
import Item from '../items/item';

const Category = (props) => {
    const {GiveDataCategory, setDataGiveSearch} = props;
    const [openCategory, setOpenCategory] = useState(""); 
    const [selectedCategory, setSelectedCategory] = useState(null);

  const texts = [
    { name: "Пылесос", category: "VacuumCleaner" },
    { name: "Холодильник", category: "Fridge" },
    { name: "Кухонный комбайн", category: "FoodProcessor" },
    { name: "Утюг", category: "Iron" },
    { name: "Морозильник", category: "Freezer" },
    { name: "Телевизор", category: "Tv" },
    { name: "Аристон", category: "Ariston" },
    { name: "Стейк машина", category: "Steik" },
    { name: "Вафельница", category: "Waffli" },
    { name: "Блендер", category: "Blender" },
    { name: "Миксер", category: "Mikser" },
    { name: "Вытяжка", category: "Vitishka" },
    { name: "Стиральная машина", category: "Washing" },
    { name: "Кондиционер", category: "Condis" },
    { name: "Микроволновка", category: "Microvol" },
    { name: "Духовка", category: "Oven" },
    { name: "Газ плита", category: "Plita" },
    { name: "Тепловентилятор", category: "Heater" },
    { name: "Кофеварка", category: "CoffeeMaker" },
    { name: "Фритюрница", category: "Fryer" },
    { name: "Соковыжималка", category: "Socovij" },
    { name: "Электрическая мясорубка", category: "MeatGrinder" },
    { name: "Электрический плита", category: "ElectricStove" },
    { name: "Электрический чайник", category: "Kettle" },
    { name: "Электрический нагреватель", category: "Nagrevatel" },
    { name: "Встраиваемая техника", category: "BuiltIn" },
    { name: "Отпариватель", category: "Otparivatel" },
    { name: "Посудомоечная машина", category: "Dishwasher" }
  ];
  useEffect(() => {
    setDataGiveSearch(texts);
}, [setDataGiveSearch]);

  useEffect(() => {
    if (typeof GiveDataCategory === 'function') {
      GiveDataCategory(openCategory); 
    }
  }, [openCategory, GiveDataCategory]);

  return (
    <div>
      <div className="content-category">
        {texts.map((el, index) => (
          <Item
            key={index}
            text={el}
            setOpenCategory={setOpenCategory} 
            isActive={selectedCategory === el.category} 
          />
        ))}
      </div>
    </div>
  );
}


export default Category;
