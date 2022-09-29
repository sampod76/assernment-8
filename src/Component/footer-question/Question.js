import React from 'react';

const Question = () => {
    return (
        <div>
            <h1 className='text-xl font-bold text-center my-5  p-3 '>Important question</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                How does react work?
                </div>
                <div className="collapse-content">
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
            </div>
           
        </div>
    );
};

export default Question;