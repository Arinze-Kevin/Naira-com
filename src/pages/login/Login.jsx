import React from 'react';
import './Login.css';

import {useState} from "react"; 
import { validateEmail } from '../../utils';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
 
function Login() { 
    const [email, setEmail] = useState({ value: "", isTouched: false }); 
    const [number, setNumber] = useState({ value: "", isTouched: false }); 
    const [password, setPassword] = useState({ value: "", isTouched: false }); 

 const getIsFormValid2 = () => { 
   return ( 
     validateEmail(email) && 
    //  number &&
     password.value.length >= 8
   ); 
 }; 

 function showPassword() {
    const x = document.getElementById('password');
    if (x.type === 'text') {
        x.type = 'password';
    } else {
        x.type = 'text'
    }
 }
 
 const clearForm = () => { 
   setEmail({ value: "", isTouched: false });
   setNumber({ value: "", isTouched: false }); 
   setPassword({ value: "", isTouched: false }); 
 };  
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   
 }; 
 
 return ( 
   <div className='container'>
    <div className='section__padding field'> 
     <form className='form' onSubmit={handleSubmit} > 
         <h2 style={{fontSize: '35px', marginTop: '-4rem'}}>Login</h2> 
         <p style={{color: 'gray'}}>Naira.com enables you make payments for PHCN, DSTV, Startimes, Swift etc.</p>
         
         <div > 
           <label> 
             Email Or Phone Number
           </label> 
           <input 
             value={email.value} 
             type='email'
             onChange={(e) => { 
               setEmail({ ...email, value: e.target.value }); 
             }} 
             onFocus={() => { 
                setEmail({ ...email, isTouched: true }); 
              }} 
             placeholder="Email or Phone number" 
           /> 
           {email.isTouched && email.value.length < 8 ? ( 
             <div className='warning'>
               <ErrorOutlineIcon style={{color: "white", fontSize: '13px'}} /> <p>Must be a valid email address.</p>
             </div>
           ) : null}
         </div> 
         <div > 
           <label> 
             Password
           </label> 
           <input 
             value={password.value} 
             type="password" 
             id='password'
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             placeholder="Password" 
           /> 
           < VisibilityIcon className='password__visibility' onClick={(e) => {showPassword()}}  />
         </div> 
         <div className='checkbox__div'>
             <input 
               type='checkbox'
               onClick={(e) => { 
                setEmail({ ...email, value: e.target.value }); 
              }} 
               /> 
            <div className='label' >
                <label>Keep me signed in</label>
            </div>
           <div className='forgot__password'><Link style={{textDecoration: 'none', color: 'gray'}} to='/forgotpassword'>Forgot password</Link></div>
         </div>
         <button type="submit" disabled={!getIsFormValid2()}> 
           Login
         </button> 
     </form> 
     <p style={{color: 'gray'}}>Got no account? <Link style={{textDecoration: 'none', color: 'rgb(33, 175, 128)'}} to='/signup'>Sign up</Link> </p>
   </div>
   <div className='section2 section__padding'>
    <Link style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', textDecoration: 'none'}} to='/signup'><button style={{width: '20%'}}>Create an account</button></Link>
    <div className='content'>
        <h1 style={{ fontSize: '30px', marginBottom: '-1rem'}}> Naira.com</h1>
        <h1 style={{ fontSize: '50px', marginBottom: '0.5rem'}}>Pay your bills <span style={{ fontSize: '40px', fontWeight: 400, color: 'white'}}>on the go</span></h1>
        <p>Naira.com helps anyone send and receive payments easily and securely</p>
        < SmartphoneIcon style={{marginTop: '4rem', fontSize: '50px'}} />
        <p>Buy Airtime</p>
    </div>
   </div>
   </div> 
 ); 
} 

export default Login;