import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Options from './Options/Options';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';

const EachQuiz = ({ questions }) => {
    const { question, id, options } = questions
    console.log(options)
    const correct = questions.correctAnswer


    const notify = (id) => {
        toast.success(`Correct Answer Is:  ${correct}`);
    }


    return (
        <div className='mx-auto container border-2 rounded-md my-3 py-3'>
            <div className=' flex my-3 rounded-md mx-10 py-6 justify-between '  >
                <h2 className='text-2xl font-bold'>Quiz:  {question.slice(3, -4)}</h2>
                <p onClick={() => notify(id)} className='text-xl cursor-pointer'><FontAwesomeIcon icon={faEye} /></p>
            </div>
            <div className='sm:grid sm:grid-cols-2 gap-2 ml-32'>
                {
                    options.map(option => <Options option={option} correct={correct} key={option.id}>
                        <Toaster />
                    </Options>

                    )
                }
            </div>

        </div>
    );
};

export default EachQuiz;