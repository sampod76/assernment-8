import React from 'react';
import Logo from './gardener.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="flex justify-start items-center bg-gradient-to-r from-cyan-500 to-blue-500  px-4 rounded-lg">
                <div className='flex w-full md:w-[30%] sm:inline md:flex-col '>
                    <div className='flex items-center gap-3'>
                        <img src={Logo} className="logo text-white " alt="logo" />
                        <h1 className='text-xs md:text-lg font-bold'>Fermer-club</h1>
                    </div>
                    <h1 className='mt-3 text-xl font-bold'>Select today Cultivation</h1>
                </div>
                <nav className=' gap-3 mx-auto justify-between items-center hidden md:flex'>
                    <a className='bg-slate-600 p-3 rounded-lg text-white text-xl font-bold '>Home</a>
                    <a className='bg-slate-600 p-3 rounded-lg text-white text-xl font-bold '>login</a>
                    <a className='bg-slate-600 p-3 rounded-lg text-white text-xl font-bold'>sing up</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;