//import hooks&&operation -->
import { useDispatch } from 'react-redux';
import { login, register } from 'redux/auth/operations';
import { useState, useEffect } from 'react';
//import styles -->
import './style.css'


export default function SingInForm() {
    const dispatch = useDispatch();
    const [overlay, setOverlay] = useState(null)

    const [leftText, setLeftText] = useState(null)
    const [rightText, setRigthText] = useState(null)

    const [accountForm, setAccountForm] = useState(null)
    const [signinForm, setSigninForm] = useState(null)

    useEffect(()=> {
        setOverlay(document.getElementById("overlay"))
        setLeftText(document.getElementById("sign-in"))
        setRigthText(document.getElementById("sign-up"))
        setAccountForm(document.getElementById("sign-in-info"))
        setSigninForm(document.getElementById("sign-up-info"))
    }, [])
  
    const onLoginFormSubmit = (evnt) => {
       
        evnt.preventDefault();
        const form = evnt.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        const userLogData = {
            email,
            password
        }
        dispatch(login(userLogData));
        form.reset();
  }
  
   const onRegisterFormSubmit = (evnt) => {
       
        evnt.preventDefault();
        const form = evnt.currentTarget; 
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userRegistData = {
            name,
            email,
            password,
        }
        dispatch(register(userRegistData))
        form.reset();
    }

    const openSignUp = () => {
    console.log(leftText)
  
  leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-sign-in");
  rightText.classList.remove("overlay-text-right-animation");

  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-sign-up";
  leftText.className += " overlay-text-left-animation";
 
  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  
  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 200);
}


    const openSignIn = () => {
    console.log(leftText)
  
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-sign-up");
  rightText.classList.remove("overlay-text-right-animation-out");
  
  signinForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-sign-in";
  rightText.className += " overlay-text-right-animation";
  
  setTimeout(function(){
    signinForm.classList.remove("form-right-slide-in")
    signinForm.style.display = "none";
    signinForm.classList.remove("form-right-slide-out")
  },700);
  
  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}


    return (
            <div className="container">
        <div className="overlay" id="overlay">
            <div className="sign-in" id="sign-in">
            <h1>Welcome Back!</h1>
            <p>Have an account? log in with your email and password</p>
            <button className="switch-button" id="slide-right-button" onClick={openSignIn}>Sing In</button>
            </div>
            <div className="sign-up" id="sign-up">
            <h1>Hello, Friend!</h1>
            <p>don't have an account? register faster and create your personal contact book</p>
            <button className="switch-button" id="slide-left-button" onClick={openSignUp}>Register</button>
            </div>
        </div>
        <div className="form">
            <div className="sign-in" id="sign-in-info">
            <h1>PhooneBook</h1>  
            <h2>Sing In</h2>
            <form id="sign-in-form" onSubmit={onLoginFormSubmit}>      
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button className="control-button in">Sing In</button>
            </form>
            </div>
            <div className="sign-up" id="sign-up-info">
            <h1>PhooneBook</h1>  
            <h2>Create Account</h2>
            <form id="sign-up-form" onSubmit={onRegisterFormSubmit}>
                <input type="text" placeholder="Name" name="name"/>
                <input type="email" placeholder="Email" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <button className="control-button up">Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}