import React, { useState , useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import RegisterationForm from './RegisterForm';
import LoginForm from './LoginForm';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import isEmail from '../util/isEmail';
import isPassword from '../util/isPassword';
import { Link } from "react-router-dom";

function Form(){

    const [registered , toggleRegister] = useState(false);
    const [userData , updateUserData]= useState({
        userEmail: "",
        userPassword: "",
        confirmPassword: ""
    });  
    const [loginData , updateLoginData]= useState({
        userEmail: "",
        userPassword: ""
    });   
    const [okEmail , setEmail] = useState(true);
    const [okPassword , setPassword] = useState(true);
    const [okConf , setConf]= useState(true);

    useEffect(() => {
        setEmail(isEmail(userData.userEmail));     
        setPassword(isPassword(userData.userPassword)); 
        setConf(userData.userPassword === userData.confirmPassword);  
        console.log((userData.userPassword));
    });

    const handleChange = () => {
        toggleRegister(prevState=>!prevState);
    };

    const changeUserData = (event) => {
        const {name , value} = event.target;
        updateUserData( (prevState) => {return {...prevState , [name]:value} });
    }

    const changeLoginData = (event) => {
        const {name , value} = event.target;
        updateLoginData( (prevState) => {return {...prevState , [name]:value} });
    }
     
    return <div>
        <Header/>
        {registered ?
         <LoginForm data={loginData} onChange={changeLoginData}/> :
         <RegisterationForm data={userData} validEmail={okEmail} validPass={okPassword} validConf={okConf} onChange={changeUserData}/>
         }
        <FormGroup row className="center">
            <FormControlLabel
                control={
                <Switch
                    checked={registered}
                    onChange={handleChange}
                    color="primary"
                />
                }
                label="Are you resgistered?"
            />
        </FormGroup>
        <div className="center">
            <Link  style={ {textDecoration: 'none'} } to="/home">

                <Button variant="contained" color="primary" >
                    {registered? "Login" : "Sign Up"}
                </Button>
            </Link>
        </div>
        
        <Footer/>
    </div>
    
}

export default Form;