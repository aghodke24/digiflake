import React from 'react';
import CategoryItem from './CategoryItem';

const CategoryList = ({ searchQuery }) => {
  const categories = [
    { id: '123', name: 'Milk', description: 'Lorem ipsum is simply dummy text', status: 'Active' },
    { id: '124', name: 'Fruits', description: 'Lorem ipsum is simply dummy text', status: 'Active' },
    { id: '125', name: 'Vegetables', description: 'Lorem ipsum is simply dummy text', status: 'Inactive' },
  ];

  const filteredCategories = categories.filter(category => category.id.includes(searchQuery));

  return (
    <div className="category-list">
      <h2>Category</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map(category => (
            <CategoryItem key={category.id} {...category} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
