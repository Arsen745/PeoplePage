import React, { useState, useEffect } from 'react';
import './Category.css';
import Item from '../items/item';

const Category = ({ GiveDataCategory }) => {
  const [OpenCategory, setOpenCategory] = useState("");

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
    { name: "Миксер", category: "Mixer" },
    { name: "Вытяжка", category: "Vitishka" },
    { name: "Стиральная машина", category: "Washing" },
    { name: "Кондиционер", category: "Condis" },
    { name: "Микроволновка", category: "Microwave" },
    { name: "Духовка", category: "Oven" },
    { name: "Газ плита", category: "Stove" },
    { name: "Тепловентилятор", category: "Heater" },
    { name: "Кофеварка", category: "CoffeeMaker" },
    { name: "Фритюрница", category: "Fryer" },
    { name: "Соковыжималка", category: "Juicer" },
    { name: "Электрическая мясорубка", category: "MeatGrinder" },
    { name: "Электрический плита", category: "ElectricStove" },
    { name: "Электрический чайник", category: "Kettle" },
    { name: "Электрический нагреватель", category: "Heater" },
    { name: "Встраиваемая техника", category: "BuiltIn" },
    { name: "Отпариватель", category: "Steamer" },
    { name: "Посудомоечная машина", category: "Dishwasher" }
  ];

  useEffect(() => {
    if (typeof GiveDataCategory === 'function') {
      GiveDataCategory(OpenCategory);
    }
  }, [OpenCategory, GiveDataCategory]);
  return (
    <div>
      <div className="content-category">
        {texts.map((el, index) => (
          <Item key={index} text={el} setOpenCategory={setOpenCategory} />
        ))}
      </div>
    </div>
  );
}

export default Category;
