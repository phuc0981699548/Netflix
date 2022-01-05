import React, { useRef } from 'react'
import './SignUpScreen.css'
import { signUp, signIn } from '../firebase'
 
function SignUpScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
        
    const register = async (e) => {
        e.preventDefault()

        await signUp(emailRef.current.value, passwordRef.current.value)
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        })
            
        }

    const signIns = async (e) => {
        e.preventDefault()

        await signIn(emailRef.current.value, passwordRef.current.value)
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        })
    }
        
        return (
            <div className="signUpScreen">
                <form>
                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button 
                        type="submit" 
                        onClick={signIns}
                        >
                        Sign In
                    </button>
                    <h4>
                        <span className="signUpScreen__gray"> New to Netflix? </span>
                        <span 
                            className="signUpScreen__link" 
                            onClick={register}
                        >
                            Sign up now.
                        </span>
                        
                    </h4>
                </form>
            </div>
        )
}     
         



export default SignUpScreen
