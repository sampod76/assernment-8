import React from 'react';
import { useState, useEffect } from 'react';
import Biodata from '../Biodata/Biodata';
import Card from '../Card/Card';

const Body = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(datas => setUsers(datas))
    }, [])



    return (
        <div className=' gap-9 my-3 inline md:flex' >
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:w-[75%]'>
                {
                    users.map(user => <Card user={user}></Card>)
                }
            </div>
            <div>
                <Biodata>

                </Biodata>
            </div>
        </div>
    );
};

export default Body;