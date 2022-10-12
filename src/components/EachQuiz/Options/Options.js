import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Options = ({ option, viewSelect }) => {
    const notify = () => toast.success('Here is your toast.', { autoclose: 600 });


    return (
        <div className='grid grid-cols-2'>
            <div className='flex'>
                <div className='mr-6'>
                    <button onClick={notify}><input type="radio" /></button>
                    <Toaster />

                </div>
                <div>
                    {option}
                </div>
            </div>
        </div>
    );
};

export default Options;