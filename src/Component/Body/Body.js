import React from 'react';
import { useState, useEffect } from 'react';
import Biodata from '../Biodata/Biodata';
import Card from '../Card/Card';
import { GetlocalStorage, SetlocalStorage } from '../LocalStorages/LocalStorage';

const Body = () => {
    const [users, setUsers] = useState([]);
    const [times, setTimes] = useState(0);
    const [BreakTime, setBreakTime]=useState(0)

    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(datas => setUsers(datas))
    }, [])

    useEffect(()=>{
        const getTimes =GetlocalStorage()
        setBreakTime(Number(getTimes))
        

    },[])

 function handelarAddToCard(minutes){
     const totalTime=times+ Number(minutes)
     setTimes(totalTime)
    
     
 }

 function hendelarAddToBrackTime(minutes){
    
    SetlocalStorage(minutes)
    const getTimes =GetlocalStorage()
    // console.log(getTimes)
    setBreakTime(Number(getTimes))
 }


    return (
        <div className=' gap-9 inline lg:flex relative my-4' >
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 lg:w-[75%]'>
                {
                    users.map(user => <Card key={user.id} user={user} handelarAddToCard={handelarAddToCard}></Card>)
                }
            </div>
            <div>
                <Biodata  times={times} BreakTime={BreakTime} hendelarAddToBrackTime={hendelarAddToBrackTime}>

                </Biodata>
            </div>
        </div>
    );
};

export default Body;