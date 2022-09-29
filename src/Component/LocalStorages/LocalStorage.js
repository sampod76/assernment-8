import React from 'react';



const SetlocalStorage = (time) => {
    
    const getTimes = localStorage.getItem('time')

   

    localStorage.setItem('time', JSON.stringify(time))
};

const GetlocalStorage =()=>{
    const getTimes =localStorage.getItem('time')
    return(JSON.parse(getTimes))
}


export { SetlocalStorage ,GetlocalStorage};