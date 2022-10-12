import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Options = ({ option, correct }) => {
    console.log(correct)
    // console.log(option)
    const notify = () => {
        console.log('right')
        if (correct === option) {
            toast.success('Your answer is Correct!! ');
        } else {
            toast.error('Your Answer is Wrong!')
        }
    }


    return (
        <div className='grid grid-cols-2'>
            <div className='flex'>
                <div className='mr-6 font-bold'>
                    <button onClick={notify}><input type="radio" name='nam' id='name' /></button>
                    <Toaster />

                </div>
                <div className='font-bold  '>
                    {option}
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default Options;