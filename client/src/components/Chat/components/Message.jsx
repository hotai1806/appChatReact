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
        isCurrentUser
          ? (
            <div className="messageContainer justifyEnd">
              <p className="sentText pr-10">{currenUser}</p>
              <div className="messageBox backgroundBlue">
                <p className="messageText colorWhite">{text} </p>
              </div>
            </div>
            )
            : (
              <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                  <p className="messageText colorDark">{text} </p>
                </div>
                <p className="sentText pl-10 ">{user}</p>
              </div>
            )
      );
}