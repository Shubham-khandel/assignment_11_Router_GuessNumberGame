import { Link } from "react-router-dom";
import style from './login.module.css'

export function Login(){
    return(
        <>
        <div className={style.container}>
        <img className={style.image}
          src="http://drive.google.com/uc?export=view&id=1mbm00S8pHCq-KmNd_YdSyyUniFEYJspT"
          alt="image"
        />
            <form>
                <input placeholder="Username" type="email"/>
                <input placeholder="Password" type="password"/>
                <div className={style.insideContainer}>
                <span>Don't have an account?<br/><Link to="/register">Register here</Link></span>
                <button className={style.loginButton}>Login</button>
                </div>
            </form>
        </div>
        </>
        
    )
}