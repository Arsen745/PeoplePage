import React, { useState } from 'react';
import Header from './components/header/Header';
import './App.css';
import PageCategories from './components/page-categpries/PageCategories';
import Category from './components/list-category/category';

const App = () => {
  const [GiveDataCategory, setGiveDataCategory] = useState("");

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="home">
        <div className='categories'>
          <Category GiveDataCategory={setGiveDataCategory} />
        </div>
        <div className="page-categories">
          <PageCategories category={GiveDataCategory} />
        </div>
      </div>
    </>
  );
}

export default App;
