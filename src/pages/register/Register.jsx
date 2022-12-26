import "./register.scss"
import GearIcon from '@rsuite/icons/Gear';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Socio</h1>
                <h2>
                   Salut !
                </h2>
                <p>
                    Welcome to IMShare Family! I am glad you are reading this.</p><p> As a thank you for joining us 
                    I would like to give you a gift </p>
                    
                
                <a href="https://www.youtube.com/watch?v=eX2qFMC8cFo" target="blank">  <GearIcon spin style={{ fontSize: '2em' }} /> </a>
                <span> Do you have an account? </span>
                <Link to="/login">
                <button>Login</button>
                </Link>

            </div>
            <div className="right">
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Register