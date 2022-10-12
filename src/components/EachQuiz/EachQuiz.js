import React from 'react';
import { toast } from 'react-toastify';
import Options from './Options/Options';

const EachQuiz = ({ questions }) => {

    const { question } = questions
    const viewSelect = () => {
        toast.success('Product Added!', { autoClose: 500 })
    }
    return (
        <div className='mx-auto container border-2 rounded-md my-3 py-3'>
            <div className=' my-3 rounded-md mx-10 py-6' >
                <h2 className='text-xl'>{question}</h2>
            </div>
            <div className='grid grid-cols-2 gap-2 ml-32'>
                {
                    questions.options.map(option => <Options viewSelect={viewSelect} option={option}></Options>)
                }
            </div>

        </div>
    );
};

export default EachQuiz;