import React from 'react';

const Biodata = () => {
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex'>
                <img src="" alt="" />
                <div><h1 className=' text-lg font-semibold'>Sampod nath</h1>
                    <h3>Subarnachar , Noakhali</h3></div>

            </div>
            <div className='flex gap-x-3'>
                <div>
                    <h1 className=' text-lg font-semibold'>75kg</h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1 className=' text-lg font-semibold'>6.9</h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1 className=' text-lg font-semibold'>25 year</h1>
                    <p>Age</p>
                </div>
            </div>
            <h1 className=' text-lg font-semibold'>Add A Break</h1>
            <div>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <h1 className=' text-lg font-semibold'>Exercise Details</h1>
            
            <button className="bg-blue-800 text-yellow-50 w-full p-2 rounded-lg w-full" type="submit">Activity Completed</button>
        </div>
    );
};

export default Biodata;