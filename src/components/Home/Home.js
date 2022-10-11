import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category/Category';

const Home = () => {
    const quizCatagories = useLoaderData([])
    const categories = quizCatagories.data

    return (
        <div>
            <h2>category: {categories.length}</h2>
            {
                categories.map(category => <Category
                    category={category}
                    key={category.id}
                ></Category>)
            }


        </div>
    );
};

export default Home;