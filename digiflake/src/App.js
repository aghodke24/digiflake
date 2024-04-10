import React, { useState } from 'react';
import './App.css';
import CategoryList from './CategoryList';
import Header from './Header';
import Sidebar from './Sidebar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div div className ="search-container">
        <input
        type="text"
        placeholder="Search by ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        </div>
        <CategoryList searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default App;
