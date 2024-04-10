import React from 'react';

const CategoryItem = ({ id, name, description, status }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{status}</td>
    </tr>
  );
};

export default CategoryItem;
