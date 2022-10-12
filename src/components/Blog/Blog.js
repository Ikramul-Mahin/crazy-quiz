import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is React Router?
                </div>
                <div className="collapse-content">
                    <p>React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How Context Works?
                </div>
                <div className="collapse-content">
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Write something about Useref ?
                </div>
                <div className="collapse-content">
                    <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called
                        <br />
                        When we initialize useRef we set the initial value: useRef(0) . It's like doing this: const count . We can access the count by using count.current . Run this on your computer and try typing in the input to see the application render count increase.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;