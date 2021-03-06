import React from 'react';
import twitterImg from '../../assets/twitter.png';
import './Loader.scss'

const Loader = () => {   
    return(
        <div className='loader'>
            <img src={twitterImg} alt="Loading..."/>
        </div>
    )
};

export default Loader;