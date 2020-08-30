import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css'
import { Layout} from 'antd'

const { Header, Footer, Content } = Layout;

export const Join =() => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <>
            <Layout>
      
                <Header>Join</Header>
            <Content style={{ padding: '0 50px' }}> 
                <div>
                    <input placeholder="" className="" type="text" onChange={(event)=>{ setName(event.target.value)} } ></input></div>
                    <div><input placeholder="" className="" type="text" onChange={(event)=>{ setRoom(event.target.value)} } ></input></div>
                    <Link onClick={event =>(!name || !room) ? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                        <button type='submit'> Join</button>
                    </Link>
            </Content>
      <Footer style={{ textAlign: 'center' }} >Footer</Footer>
               
               
     
            </Layout>
        </>
    );
};