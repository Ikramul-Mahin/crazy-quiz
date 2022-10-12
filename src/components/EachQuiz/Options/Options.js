import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Options = ({ option }) => {
    const notify = () => toast.success('Option Selected!', { autoclose: 600 });


    return (
        <div className='grid grid-cols-2'>
            <div className='flex'>
                <div className='mr-6 font-bold'>
                    <button onClick={notify}><input type="radio" /></button>
                    <Toaster />

                </div>
                <div className='font-bold  '>
                    {option}
                </div>
            </div>
        </div>
    );
};

export default Options;