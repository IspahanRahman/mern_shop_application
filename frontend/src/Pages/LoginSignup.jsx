import './CSS/LoginSignup.css';

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" className=""/>
          <input type="email" placeholder="Your Name" className=""/>
          <input type="password" placeholder="Enter Password"/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already Have and account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>By continuing, I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;