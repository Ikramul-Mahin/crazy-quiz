import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Category from './Category/Category';


const Home = () => {
    const quizCategories = useLoaderData()
    const categories = quizCategories.data

    return (
        <div>
            <div className='py-2 flex justify-center items-center'>
                <img src="./quizs.jpg" className='w-4/12 h-60 ' alt="" />
                <div className='bg-sky-600 text-white w-full'>
                    <h2 className='ml-3 text-4xl text-left'>Practicing quiz is a good habit. It improves our brain to Take desicion. Practise quiz in coding is also help us to do good in our interview.</h2>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-1  container mx-auto px-4 text-center'>
                {
                    categories.map(category => <Category
                        category={category}
                        key={category.id}

                    ></Category>)
                }
            </div>



        </div>
    );
};

export default Home;