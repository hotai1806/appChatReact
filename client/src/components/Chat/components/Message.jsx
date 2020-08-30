import React from 'react';

import './style.css';

export const Message = ({message:{user ,text} ,name}) =>{
    let isCurrentUser = false;
    
    const currenUser = name.trim().toLowerCase();
    if(user ===currenUser)
    {
        isCurrentUser = true;
    }

    return (
        isCurrentUser?(
            <div className="messageContainer justifyStart">
                <p className='yourUser'> {user}</p>
                <div>{text} </div>
            </div>
        ):(
            <div className="messageContainer justifyEnd">
                <p className='otherUser'> {user}</p>
                <div>{text} </div>
            </div>
        )
    )
}