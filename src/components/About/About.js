import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const About = () => {

    const notify = () => toast.success('Here is your toast.', { autoclose: 600 });

    return (
        <div>
            <h3>this is about.</h3>
            <button onClick={notify}>Make me a toast</button>
            <Toaster />
        </div>
    );
};

export default About;