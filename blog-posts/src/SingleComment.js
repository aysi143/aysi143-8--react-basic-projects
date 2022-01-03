import React from "react";
import prof1 from './img/prof3.jpg';


const SingleComment=(props)=>{
    return(
    <div className='comment'>
            <a href='/' className='avatar'>
                <img src={props.prof} alt='profile picture'></img>
            </a>
            <div className='content'>
                <a href='/' className='author'>{props.name}</a>
                <div className='metadata'>
                    <span className='date'>{props.date}</span>
                </div>
                 <div className='text'>{props.text}</div>
            </div>
        </div>  )
}

export default SingleComment;