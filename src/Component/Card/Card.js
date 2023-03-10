import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const {handelarAddToCard}=props
    const {id,balance:time,picture,name,about,age}=props.user
    


    return (
        <div className='' >
            <div className=" box-shadow card w-full h-full  card-compact bg-base-100 shadow-xl">
                <figure><img className='h-44 w-full' src={picture} /></figure>
                <div className="card-body">
                    <h1 className=' text-lg font-bold'>{name}</h1>
                    <p>{about.slice(0,100)}</p>
                    <h2 className=' text-lg font-bold'>For Age: {age}</h2>
                    <h2 className=' text-lg font-bold'>Time required : {time} <span>minutes</span></h2>
                    <div className="flex justify-center">
                        <button onClick={()=>handelarAddToCard(time)} className="btn btn-primary w-full hover:bg-amber-600"><span className='mx-2'><FontAwesomeIcon icon={faShoppingCart} /></span>Add list </button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Card;