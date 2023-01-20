import styles from "../styles/login.module.css";
import frame from "../images/Frame.svg";
import {json, useNavigate} from "react-router-dom"
import { useState } from "react";
export const Login=()=>{
    const [userLogin,setUserLogin] = useState({userName:"",password:""})
    const navigate = useNavigate()
    const handleOnChange=(e)=>{
        const {name,value} = e.target
        setUserLogin({
            ...userLogin,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(userLogin.userName && userLogin.password){
            localStorage.setItem("ampcome_user",JSON.stringify(userLogin.userName))
            navigate("/dashboard")
        }
        else{
            alert("Enter any username and password")
        }
    }
    return (
        <>
            {/* main container */}
            <div className={styles.login_container}>
                 {/*welcome box  */}
                <div className={styles.welcome_card_box}>
                    <div>
                        <p>Welcome to Ampcome</p>
                    </div>
                    <div>
                        <p>Get ahead of the curve. Join the next generation of health heroes.</p>
                    </div>
                    <div>
                        <img src={frame} alt="" />
                    </div>
                </div>

                {/* login info box */}
                <div className={styles.login_info_container}>
                    <div className={styles.login_form_container}>
                        <p>Sign-in to your account</p>
                        <form action="" className={styles.login_form_content_box} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username" name="userName" onChange={handleOnChange} value={userLogin.userName} />
                            <br />
                            <input type="password" placeholder="Password" name="password" onChange={handleOnChange} value={userLogin.password} />
                            <br />
                            <select name="select unit name" id="" value="select unit name">
                                <option value="">Select unit name</option>
                            </select>
                            <br />
                            <button>Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}