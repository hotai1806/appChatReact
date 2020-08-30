import React, {useState, useEffect} from 'react';

import queryString from 'query-string';
import io from 'socket.io-client';
import {Messages} from './components/Messages';


const ENDPOINT = 'localhost:5000';
let socket;

export const Chat =({ location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(()=>{
    
        const {name, room} = queryString.parse(location.search);
        
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room },(error)=>{
            if(error){
                alert(error);
            }
        });
       
        
    },[ENDPOINT, location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages(messages => [...messages, message]);
        })

    },[])

    const sendMessage = (event)=>{
        event.preventDefault();
        
        if(message){
            socket.emit('sendMessage', message, ()=> setMessage(''));
        }

    }
    console.log(message,messages)
    return (
    <form>
    <div>  
    <h1> chat</h1>
    <Messages messages={messages} name={name}/>
    <input 
        value={message}
        type='text'
        placeholder="Type a message..."
        onChange={({target:{value}}) =>setMessage(value)}
        onKeyPress={event => event.key === 'Enter'? sendMessage(event):null }
    
     />
    <button className='sendButton' onClick={e => sendMessage(e)} ></button>   
    </div>
    </form>
    );
};

