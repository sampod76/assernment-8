import React from 'react';
import Logo from './gardener.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="bg-gradient-to-r from-cyan-500 to-blue-500  p-4 rounded-lg">
                <div className='flex items-center gap-3'>
                    <img src={Logo} className="logo text-white " alt="logo" />
                    <h1 className='text-lg font-bold'>Fermer-club</h1>
                </div>
                <h1 className='mt-3 text-xl font-bold'>Select today’s Cultivation</h1>

            </header>
        </div>
    );
};

export default Header;