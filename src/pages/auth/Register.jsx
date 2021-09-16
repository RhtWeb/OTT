import "./auth.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="top">
        <img src="" alt="" className="logo" />
        <button className="loginButton">Sign In</button>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anyrime.</h2>
        <p>
          Ready to watch ? Enter your email to create or restart your membership.
        </p>
        <div className="input">
          <input type="email" placeholder="email address" />
          <button className="registerButton">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Register;
