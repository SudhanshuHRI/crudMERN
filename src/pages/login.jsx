import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate ();

    return (
        <div>
        <div class="LoginPageContainer">
         <div class="LoginPageInnerContainer">
             <div class="ImageContianer">
                 <img src="/login-animate.gif" class="GroupImage"/>
             </div>
             <div class="LoginFormContainer">
                 <div class="LoginFormInnerContainer">
                     <div class="LogoContainer">
                         <img src="/crudLogo.jpg" class="logo"/>
                     </div>
                     <header class="header">Log in</header>
                     <header class="subHeader">Welcome to <b>CRUD Operations.</b> Please Enter your Details</header>
                 
                     <form>
                         <div class="inputContainer">
                             <label class="label" for="emailAddress"><img src="https://i.imgur.com/Hn13wvm.png" class="labelIcon"/><span>Email
                                     Address*</span></label>
                             <input type="email" class="input" id="emailAddress" placeholder="Enter your Email Address"/>
                         </div>
                         <div class="inputContainer">
                             <label class="label" for="emailAddress"><img src="https://i.imgur.com/g5SvdfG.png"
                                     class="labelIcon"/><span>Password*</span></label>
                             <input type="password" class="input" id="emailAddress" placeholder="Enter your Password"/>
                         </div>
                         <div class="OptionsContainer">
                             <div class="checkboxContainer">
                                    <span className='mx-1'>Dont have account?</span>
                                    <a href='#' >Sign-In</a>
                             </div>
                             <a href="#" class="ForgotPasswordLink">Forgot Password?</a>
                         </div>
                         <button class="LoginButton" onClick={()=>navigate('/home')}>Login</button>
                     </form>
                 </div>
             </div>
         </div>
        </div>
        </div>
    );
}

export default Login;