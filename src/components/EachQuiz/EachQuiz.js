import React from 'react';

const EachQuiz = ({ questions }) => {
    const { question, id, } = questions
    return (
        <div className='bg-gray-500'>
            <div className='bg-sky-500 text-white my-3 rounded-md mx-10 py-6' >
                <h2>{question}</h2>
                <p>{id}</p>
            </div>

        </div>
    );
};

export default EachQuiz;