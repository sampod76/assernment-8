import React, { useState } from 'react';
import img from './1.jpg'
import '../LocalStorages/LocalStorage.js'
import { SetlocalStorage } from '../LocalStorages/LocalStorage.js';
import Swal from 'sweetalert2'

const Biodata = (props) => {
    const {times,BreakTime,hendelarAddToBrackTime}=props
  

    const Succese=()=>{
        Swal.fire(
            'Good Your Break time Start!',
            'Done your activity!',
            'success'
          )
    }
    return (
        <div className='flex flex-col gap-9 border-2 border-cyan-600 p-3 bg-emerald-200 h-full static top-0'>
            <div className='flex'>
                <img className='w-14 rounded-full' src={img} alt="" />
                <div className='mx-2'><h1 className=' text-2xl font-bold'>Sampod nath</h1>
                    <h3 className='text-lg font-semibold'>Subarnachar , Noakhali</h3></div>

            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className=' text-2xl font-bold'>75kg</h1>
                    <p className='text-lg'>Weight</p>
                </div>
                <div>
                    <h1 className=' text-2xl font-bold'>6.9</h1>
                    <p className='text-lg'>Height</p>
                </div>
                <div>
                    <h1 className=' text-2xl font-bold'>25 year</h1>
                    <p className='text-lg'>Age</p>
                </div>
            </div>
            <h1 className=' text-lg font-semibold bg-slate-600 text-white p-3 rounded-md'>Add A Break</h1>
            <div className=' flex gap-3 '>
                <button type="submit" className=' text-lg font-semibold text-gray-900 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold' onClick={(e)=>hendelarAddToBrackTime(e.target.value)} value="40">40m</button>
                <button type="submit" className=' text-lg font-semibold text-gray-900 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold' onClick={(e)=>hendelarAddToBrackTime(e.target.value)} value="50">50m</button>
                <button type="submit" className=' text-lg font-semibold text-gray-900 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold' onClick={(e)=>hendelarAddToBrackTime(e.target.value)} value="30">30m</button>
                <button type="submit" className=' text-lg font-semibold text-gray-900 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold' onClick={(e)=>hendelarAddToBrackTime(e.target.value)} value="45">45m</button>
                <button type="submit" className=' text-lg font-semibold text-gray-900 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 font-semibold' onClick={(e)=>hendelarAddToBrackTime(e.target.value)} value="55">55m</button>
            
                
            </div>
            <h1 className=' text-lg font-semibold bg-slate-600 text-white p-3 rounded-md'>Exercise Details</h1>
            <div className="form-control">
                
                <label className="input-group">
                    <span  className='w-[40%]'>Exercise time</span>
                    <input type="text"  className="input input-bordered"  value={`${times} minutes`}/>
                </label>
            </div>
            <div className="form-control">
                
                <label className="input-group">
                    <span className='w-[40%]'>Break time</span>
                    <input type="text" className="input input-bordered" value={`${BreakTime} minutes`}/>
                </label>
            </div>

            <button className="bg-blue-800  hover:bg-amber-600 text-yellow-50 w-full p-2 rounded-lg w-full" type="submit" onClick={Succese}>Activity Completed</button>
        </div>
    );
};

export default Biodata;