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
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                props and state difference in react js?
                </div>
                <div className="collapse-content">
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                useeffect use cases?
                </div>
                <div className="collapse-content">
                   <p>1.State management </p>
                   <p>2.Conditional rendering </p>
                   <p>3.Toggle flags (true/false) </p>
                   <p>4.Counter</p>
                   <p>5.Get API data and store it in state </p>
                </div>
            </div>
        </div>
    );
};

export default Question;