import React from 'react';
import Logo from './gardener.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="">
                <div className='flex items-center gap-3'>
                    <img src={Logo} className="logo" alt="logo" />
                    <h1 className='text-lg font-bold text-blue-700'>Fermer-club</h1>
                </div>
                <h1 className='mt-3 text-xl font-bold text-red-400'>Select today’s Cultivation</h1>

            </header>
        </div>
    );
};

export default Header;