import React from 'react';
import './SignUp.css';

import {useState} from "react"; 
import { validateEmail } from '../../utils';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
 
// const PasswordErrorMessage = () => { 
//  return ( 
//    <p className="FieldError">Password should have at least 8 characters</p> 
//  ); 
// }; 

 
function SignUp() { 
    const [email, setEmail] = useState(''); 
    const [number, setNumber] = useState(''); 
    const [referralCode, setReferralCode] = useState("");
    const [password, setPassword] = useState({ value: "", isTouched: false }); 
    const [confirmPassword, setConfirmPassword] = useState({ value: "", isTouched: false }); 

 const getIsFormValid = () => { 
   return ( 
     validateEmail(email) && 
     number &&
     referralCode &&
     password.value.length >= 8 && 
     confirmPassword.value.length >= 8
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

 function showConfirmPassword() {
    const x = document.getElementById('confirmPassword');
    if (x.type === 'text') {
        x.type = 'password';
    } else {
        x.type = 'text'
    }
 }
 
 const clearForm = () => { 
   setEmail('');
   setNumber(''); 
   setReferralCode("");
   setPassword({ value: "", isTouched: false }); 
   setConfirmPassword({ value: "", isTouched: false });
 };  
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
   } else {
       alert("Account created!");
       clearForm(); 
   };
 }; 
 
 return ( 
   <div className='container'>
    <div className='section__padding field'> 
     <form className='form' onSubmit={handleSubmit} > 
         <h2 style={{fontSize: '35px'}}>Create an account</h2> 
         <p style={{color: 'gray'}}>Naira.com enables you make payments for PHCN, DSTV, Startimes, Swift etc.</p>
         <div > 
           <label> 
             Your email address
           </label> 
           <input 
             value={email} 
             type='email'
             onChange={(e) => { 
               setEmail( e.target.value ); 
             }} 
            //  onFocus={() => { 
            //     setEmail({ ...email, isTouched: true }); 
            //   }} 
             placeholder="Email" 
           /> 
           {/* {email.isTouched && email.value.length < 8 ? ( 
             <div className='warning'>
               <ErrorOutlineIcon style={{color: "white", fontSize: '13px'}} /> <p>  Must be a valid email address.</p>
             </div>
           ) : null} */}
         </div> 
         <div > 
           <label> 
             Mobile number
           </label> 
           <input 
             value={number} 
             type='tel'
             onChange={(e) => { 
               setNumber( e.target.value ); 
             }} 
            //  onFocus={() => { 
            //     setNumber({ ...number, isTouched: true }); 
            //   }} 
             placeholder="Phone number" 
           /> 
           {/* {number.isTouched && number.value.length < 10 ? ( 
             <div className='warning'>
                <ErrorOutlineIcon style={{color: "white", fontSize: '13px'}} /> <p>Must be a valid phone.</p>
             </div>
           ) : null} */}
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
             onFocus={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           < VisibilityIcon className='password__visibility' onClick={(e) => {showPassword()}}  />
           {password.isTouched && password.value.length < 8 ? ( 
             <div className='password__warning'>
             <ErrorOutlineIcon style={{color: "white", fontSize: '13px'}} /> <p>8 to 24 characters <br /> 
             Must include an uppercase letter, lowercase letters and a number. </p>
          </div>
           ) : null} 
         </div> 
         <div > 
           <label> 
             Confirm password
           </label> 
           <input 
             value={confirmPassword.value} 
             type="password" 
             id='confirmPassword'
             onChange={(e) => { 
               setConfirmPassword({ ...confirmPassword, value: e.target.value }); 
             }}
             placeholder="Confirm password" 
           /> 
           < VisibilityIcon className='password__visibility' onClick={(e) => {showConfirmPassword()}}  />
         </div> 
        
         <div > 
           <label> 
             Referral code (Optional)
           </label> 
           <input 
             value={referralCode} 
             onChange={(e) => { 
               setReferralCode(e.target.value); 
             }} 
             placeholder="Enter code" 
           /> 
         </div> 
         
         <button type="submit" disabled={!getIsFormValid()}> 
           Create an account-It's free
         </button> 
     </form> 
     <p style={{color: 'gray'}}>Have an Account? <Link style={{textDecoration: 'none', color: 'rgb(33, 175, 128)'}} to='/login'>Sign in</Link> </p>
   </div> 
   <div className='section2 section__padding'>
    <Link style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', textDecoration: 'none'}} to='/login'><button style={{width: '20%'}}>Login to your account</button></Link>
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

export default SignUp;