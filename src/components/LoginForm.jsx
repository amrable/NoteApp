import React from 'react';

function LoginForm(props){

    function handleChange(event){
        props.onChange(event);
    }
    return <form>
        <input onChange={handleChange} placeholder="Username" name="userEmail" value={props.data.userEmail}></input>
        <input onChange={handleChange} type="password" placeholder="Password" name="userPassword" value={props.data.userPassword}></input>
    </form>
}

export default LoginForm;