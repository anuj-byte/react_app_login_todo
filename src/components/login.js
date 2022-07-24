import {useState} from "react"
import { useNavigate,NavLink } from "react-router-dom"
import axios from "axios"
import "./style.css"
const LoginComponent=()=>{
    const [email,setEmail]=useState("")
    const [flag,setFlag]=useState(false)
    const [message,setMessage]=useState("")
    const [password,setpassword]=useState("")
    const [Token,setToken]=useState("")
    const navigate=useNavigate() 
    const handleChange=(e,statename)=>{
        if(statename==="email"){
            setEmail(e.target.value)
        }
        if(statename==="password"){
            setpassword(e.target.value)
        }
    }
    const handleLogin=async (e)=>{
        e.preventDefault()
        try{
        const response=await axios.post("http://localhost:3003/login",{"email":email,"password":password})
    
        setMessage(response.data.msg)
        setFlag(response.data.status)
        setToken(response.data.token)
        console.log(Token)
        console.log(flag)

        }
        catch(err){
            console.log(err)
        }

    }
   
return(
    <div className="container">
        <form className="login-form" id="login-form" autoComplete="off">
            <div>
            <div><h1 className="ally-hidden">Login</h1></div>
            <label className="label-email">
            <input type="email" className="text" name="email" placeholder="Email" tabIndex="1" required onChange={(e)=>handleChange(e,"email")}></input>
            <span className="required">Email</span>  
            </label>
            </div>
            <div>
            <label className="label-password" htmlFor="password">
            <input type="text" className="text" tabIndex="2" placeholder="Password" name="password" required onChange={(e)=>handleChange(e,"password")}></input>
                <span className="required">Password</span>

            </label>
            </div>         
           {/* <button value="Log In" className="signup" onClick={(e)=>handleLogin(e)}>Send</button>*/}
           <input type="submit" value="Log In" onClick={(e)=>handleLogin(e)}></input>

            <div className="email">
                <a href="/signup">Signup</a>
            </div>
            <figure area-hidden="true">
                <div className="person-body"></div>
                <div className="neck skin"></div>
                <div className="head skin">
                    <div className="eyes"></div>
                    <div className="mouth"></div>
                </div>
                <div className="hair"></div>
                <div className="ears"></div>
                <div className="shirt-1"></div>
                <div className="shirt-2"></div>
            </figure>
            {
             flag?navigate(`/todo`):<h1 className="alert">{message}</h1>//myFunction()//

            }
           {/* <NavLink
                className="navbar-item" activeClassName="is-active" to="/signup" exact>Signup
           </NavLink> */}
        </form>
    </div>
)
}
export default LoginComponent
