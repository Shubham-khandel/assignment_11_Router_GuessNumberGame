import style from './login.module.css'
import { Link } from 'react-router-dom'

export function Register(){
    return(
        <>
        <div className={style.container}>
        <img className={style.image}
          src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          alt="image"
        />
            <form>
                <input placeholder="abc@gmail.com" type="email"/>
                <input placeholder="Username" type="text"/>
                <input placeholder="Password" type="password"/>
                <div className={style.insideContainer}>
                <span>Have an account?<br/><Link to="/login">Login here</Link></span>
                <button className={style.loginButton}>Register</button>
                </div>
            </form>
        </div>
        </>
    )
}