import React from 'react';
import myGif from './gif_test_bye.gif';
import '../Mentions/MentionsLegales.scss';

const Mentions = () => {
    return(
        <div className='gif-container'>

        <img src={myGif} alt="my-gif" /> 

        </div>
       
    );
};

export default Mentions;