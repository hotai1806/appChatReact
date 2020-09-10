import React, {useState, useEffect} from 'react';

import queryString from 'query-string';
import io from 'socket.io-client';
import {Messages} from './components/Messages';
import { Layout, Row, Col, Input } from 'antd';


const ENDPOINT = 'localhost:5000';
let socket;
const {Header, Content, Sider} = Layout;
const { TextArea } = Input;

export const Chat =({ location}) => {
    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
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
    <Layout style={{ minHeight: '100vh' }} >
        <Sider collapsible collapsed={collapsed} onCollapse={()=>{setCollapsed(!collapsed)}} >
        </Sider>
        <Layout>
        <Content  >
        <div className="outerContainer">  
        <div className="infoRoom"> <h1> ROOM</h1> </div>
        <Messages className="container"  messages={messages} name={name}/>
       
        <Row justify="space-between" >
      
        <Col flex={2} >
            <TextArea 
           
            autoSize={{ minRows: 2, maxRows: 4 }}
            value={message}
            type='text'
            placeholder="Type a message..."
            onChange={({target:{value}}) =>setMessage(value)}
            onPressEnter={e=> sendMessage(e)}
            
            resize='none'
            bordered
             />
        
        </Col>
        <Col flex={2} ><button className='sendButton' onClick={e => sendMessage(e)} ></button> 
         </Col> 
     
        </Row>
        </div>
        </Content>
        </Layout>
    </Layout>
    );
};

