import React from 'react';

const Biodata = () => {
    return (
        <div className='flex flex-col gap-11 border-2 border-cyan-600 p-3 bg-emerald-200 h-full static top-0'>
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
            <div className=' flex gap-3'>
                <button className=' rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold'>10s</button>
                <button className=' rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold'>20s</button>
                <button className=' rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold'>30s</button>
                <button className=' rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold'>40s</button>
                <button className=' rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold'>50s</button>
            </div>
            <h1 className=' text-lg font-semibold'>Exercise Details</h1>
            <div className="form-control">
                
                <label className="input-group">
                    <span  className='w-[40%]'>Exercise time</span>
                    <input type="text"  className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                
                <label className="input-group">
                    <span className='w-[40%]'>Break time</span>
                    <input type="text"  className="input input-bordered" />
                </label>
            </div>

            <button className="bg-blue-800 text-yellow-50 w-full p-2 rounded-lg w-full" type="submit">Activity Completed</button>
        </div>
    );
};

export default Biodata;