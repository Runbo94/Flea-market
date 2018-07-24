/*
user login router component
*/ 
import React, {Component} from 'react'
import{
    NavBar, 
    WingBlank, 
    List, 
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'
//const ListItem = List.Item

export default class Login extends Component { 
    state = {
        username:'',
        password:'',
        type:'buyer',  //buyer & seller
    }
    Login = () => {
        console.log(this.state)
    }
    handleChange = (name, val) => {
        this.setState({
            [name] : val
        })
    }
    toRegister = () => {
        this.props.history.replace('/register')
    }
    render() { 
        const {type} = this.state
        return ( 
        <div>
            <NavBar>Flea &nbsp;Market</NavBar>
            <Logo/>
            <WingBlank>
                <List>
                    <InputItem clear='true' placeholder='enter your username' onChange={val => {this.handleChange('username',val)}}></InputItem>
                    <InputItem clear='true' placeholder='enter your password' type="password" onChange={val => {this.handleChange('password',val)}}></InputItem>
                    <List.Item>
                        <span>user type:</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio checked={type==='buyer'} onChange={() => this.handleChange('type', 'buyer')}>buyer</Radio>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Radio checked={type==='seller'} onChange={() => this.handleChange('type', 'seller')}>seller</Radio>
                    </List.Item>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.Login}>sign in</Button>
                    <WhiteSpace/>
                    <Button onClick={this.toRegister}>sign up</Button>
                </List>
            </WingBlank>
        </div> 
        ) 
    } 
}