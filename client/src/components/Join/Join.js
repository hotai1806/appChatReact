import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css'
import { Layout,Col,Form, Input,  Divider } from 'antd'
import { UserOutlined, LinkOutlined } from '@ant-design/icons';
import './Join.css';
const {  Content } = Layout;

export const Join =() => {
    
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 12 },
      };
    const tailLayout = {
        wrapperCol: { offset: 0, span: 18 },
      };
    const onFinish = values => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };


    return(
        <>
            <Layout>
           
          
            <Content  style={{minHeight: '100vh', height:'100%', padding: ' 50px',paddingTop:'2%',backgroundColor:'#050801' }}> 
            <Col span={15}> </Col>
            <Col span={7} offset={15}>
              <div>
            <Divider style={{color:'#03e9f4',fontFamily:'league_gothicregular!important'}}>JOIN US</Divider>

                    <Form 
                action=""
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
     
      style={{color:'white'}}
  

    >
      <Form.Item>
          <label >User Name</label>
        <Input type="text" 
        prefix={<UserOutlined />}
        onChange={(event)=>{ setName(event.target.value)} }
        style={{WebkitBoxReflect:" below 230px linear-gradient(transparent, #0005)"}}
        />
      </Form.Item>
 
      <Form.Item
      > 
       <label >Room</label>
        <Input  
        prefix={<LinkOutlined />} 
        type="text" 
        onChange={(event)=>{ setRoom(event.target.value)} }
        style={{WebkitBoxReflect:" below 230px linear-gradient(transparent, #0005)"
        }} />
      </Form.Item>
      <Divider></Divider>
      <Form.Item {...tailLayout}>
        <Link  onClick={event =>(!name || !room) ? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
        <button className="linkButton">
            Join
       
        </button>
         
        </Link>


      </Form.Item>
    </Form>
    </div>


                    
                    </Col>
            </Content>

 
               
     
            </Layout>
        </>
    );
};