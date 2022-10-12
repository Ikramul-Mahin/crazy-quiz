import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Options from './Options/Options';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const EachQuiz = ({ questions }) => {
    const { question } = questions
    const showAns = () => {
        console.log('answer')
    }

    return (
        <div className='mx-auto container border-2 rounded-md my-3 py-3'>
            <div className=' flex my-3 rounded-md mx-10 py-6 justify-between '  >
                <h2 className='text-2xl font-bold'>{question}</h2>
                <p onClick={showAns} className='text-xl'><FontAwesomeIcon icon={faEye} /></p>
            </div>
            <div className='sm:grid sm:grid-cols-2 gap-2 ml-32'>
                {
                    questions.options.map(option => <Options option={option}></Options>)
                }
            </div>

        </div>
    );
};

export default EachQuiz;