import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EachQuiz from '../EachQuiz/EachQuiz';

const Quizes = () => {
    const category = useLoaderData()
    const allQuestios = category.data.questions
    console.log(console.log(allQuestios))
    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-semibold underline'> {category.data.name}  Questions</h2>
            <div>
                {
                    allQuestios.map(questions => <EachQuiz questions={questions} key={questions.id}></EachQuiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;