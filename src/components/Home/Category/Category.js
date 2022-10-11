import React from 'react';

const Category = ({ category }) => {
    console.log(category)
    const { id, logo, name, total } = category
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Category;