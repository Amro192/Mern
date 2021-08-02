import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameerror, setUsernameerror] = useState("");
    const [email, setEmail] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [password, setPassword] = useState("");  
    const [passworderror, setPassworderror] = useState("");  
    const [lastname,setLastname]=useState("");
    const [lastnameerror,setLastnameeroor]=useState("");
    const [confpassword,setConfpassword]=useState("");
    const [confpassworderror,setConfpassworderror]=useState("");
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username,lastname, email, password,confpassword };
        
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div id="input">
                <label>Username: </label> 
                <input type="text" onChange={ (e) => {if(e.target.value.length>2){setUsername(e.target.value);setUsernameerror("");}else setUsernameerror("username must be at lest 2 ch");}} />
            </div>
            {
                    usernameerror ?
                    <p style={{color:'red'}}>{ usernameerror }</p> :
                    ''
                }
            <div id="input">
                <label>LastName: </label> 
                <input type="text" onChange={ (e) => {if(e.target.value.length>2){setLastname(e.target.value);setLastnameeroor("");}else setLastnameeroor("lastname must be at lest 2 ch");} } />
            </div>
            {
                    lastnameerror ?
                    <p style={{color:'red'}}>{ lastnameerror }</p> :
                    ''
                }
            <div id="input">
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => {if(e.target.value.length>2){setEmail(e.target.value);setEmailerror("");}else setEmailerror("Email must be at lest 2 ch");} } />
            </div>
            {
                    emailerror ?
                    <p style={{color:'red'}}>{ emailerror }</p> :
                    ''
                }
            <div id="input">
                <label>Password: </label>
                <input type="text" onChange={ (e) => {if(e.target.value.length>8){setPassword(e.target.value);setPassworderror("");}else setPassworderror("Pasword must be at lest 2 ch");} } />
            </div>
            {
                    passworderror ?
                    <p style={{color:'red'}}>{ passworderror }</p> :
                    ''
                }
            <div id="input">
                <label>ConfPassword: </label>
                <input type="text" onChange={ (e) => {if(e.target.value===password){setConfpassword(e.target.value);setConfpassworderror("");}else setConfpassworderror("Password not match");} } />
            </div>
            {
                    confpassworderror ?
                    <p style={{color:'red'}}>{ confpassworderror }</p> :
                    ''
                }
        </form>
        <p>First name:{username}</p>
        <p>Laste name:{lastname}</p>
        <p>Email:{email}</p>
        <p>Password:{password}</p>
        <p>Confirmation Password:{confpassword}</p>
        </div>


    );
};
    
export default UserForm;