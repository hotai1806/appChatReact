import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';
import {Message} from './Message';

import './style.css';

export const Messages =({messages , name}) =>{
    return(
        <ScrollToBottom>
            {messages.map((message, i)=><div key={i}><Message message={message} name={name} /> </div>)}
        </ScrollToBottom>
    );
}