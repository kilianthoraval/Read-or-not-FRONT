import React from 'react';
import './UserCircle.scss';

export default function UserCircle(props) {
    return (
      <div className='icon-container'>
      <svg width="3em" height="3em" viewBox="0 0 32 32" {...props}><path d="M27.2 23.9c-0.5-3.3-1.8-6.3-4.9-6.7-1.6 1.7-3.8 2.8-6.3 2.8s-4.8-1.1-6.3-2.8c-3 0.4-4.4 3.4-4.9 6.7 2.5 3.5 6.6 5.8 11.2 5.8s8.7-2.3 11.2-5.8zM22.9 11.4c0-3.8-3.1-6.9-6.9-6.8s-6.9 3.1-6.9 6.8 3.1 6.9 6.9 6.9 6.9-3.1 6.9-6.9zM32 16c0 8.8-7.1 16-16 16-8.8 0-16-7.2-16-16 0-8.8 7.2-16 16-16s16 7.2 16 16z"  /></svg>
       <div className='welcome-container'> 
      <h2 className='welcome'>Bienvenue</h2>
      </div> 
      </div>
      )
  };