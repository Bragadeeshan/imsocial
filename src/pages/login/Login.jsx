import "./login.scss"
import GearIcon from '@rsuite/icons/Gear';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>IMShare</h1>
                <h2>
                   Hi there !
                </h2>
                <p>
                    Welcome back to IMShare Family! I am glad you are reading this.As a thank you for joining us 
                    I would like to give you a gift 
                    
                </p>
                <a href="https://www.youtube.com/watch?v=eX2qFMC8cFo" target="blank">  <GearIcon spin style={{ fontSize: '2em' }} /> </a>
                <span> Don't you have an account? </span>
                <Link to="/register">
                <button>Register</button>
                </Link>

            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login