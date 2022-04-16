import React from 'react'
import "./Login.css";
import images from "../../../constants/images";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
export const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }
    return (
        <div className="wrapper__login">
            <div className="wrapper__login-box">
                <div className="wrapper__login-box-left">
                    <div className="wrapper__login-logo">
                        <Link to="/"><img src={images.gericht} alt="logo" /></Link>
                    </div>
                    <div className="wrapper__login-text">
                        <p className="p__opensans">Login using social media to get quick access</p>
                    </div>
                    <div className="wrapper__login-options">
                        <div className="wrapper__login-option">
                            <button className="button_login" style={{backgroundColor:"#3b5998"}}>Signin with Facebook</button>
                        </div>
                        <div className="wrapper__login-option">
                            <button className="button_login" style={{backgroundColor:"#00aced"}}>Signin with Twitter</button>
                        </div>
                        <div className="wrapper__login-option">
                            <button className="button_login" style={{backgroundColor:"#c32f10"}}>Signin with Google</button>
                        </div>
                    </div>
                </div>
                <div className="wrapper__login-box-right">
                   
                    <div className="wrapper__login-account">
                    <h1 className="login__account">Login to your account</h1>
                    <p className="p__opensans">Don't have an account? <strong><Link to="/register" >Sign up free</Link></strong></p>
                        <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item style={{marginTop:"3rem"}}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox >Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                            Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                        </Form.Item>
                        </Form>
                    </div>
                </div>
                
            </div>
            
        </div>
  )
}
