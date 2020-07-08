import React from 'react';

function RegisterationForm(props){

    function handleChange(event){
        props.onChange(event);        
    }
    return <form>
        <input onChange={handleChange} style={{color: !props.validEmail? 'red' : null}} name="userEmail" placeholder="Email" value={props.data.userEmail}></input>
        <input onChange={handleChange} style={{color: !props.validPass? 'red' : null}} name="userPassword" type="text" placeholder="Password" value={props.data.userPassword}></input>
        <input onChange={handleChange} style={{color: !props.validConf? 'red' : null}} name="confirmPassword" type="text" placeholder="Confirm Password" value={props.data.confirmPassword}></input> 
    </form>
}

export default RegisterationForm;