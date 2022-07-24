import {useState} from "react"
import { useNavigate,NavLink } from "react-router-dom"
import axios from "axios"
import "./style.css"
const SignUpComponent=()=>{
    const [role,setrole]=useState("")
    const [country,setcountry]=useState("")
    const [pincode,setpincode]=useState("")
    const [email,setEmail]=useState("")
    const [age,setage]=useState("")
    const [flag,setFlag]=useState(false)
    const [message,setMessage]=useState("")
    const [address,setaddress]=useState("")
    const [password,setpassword]=useState("")
    const navigate=useNavigate() /* email:data.email,
    password:hashedpassword,
    role:data.role,
    age:data.age,
    country:data.country,
    pincode:data.pincode*/
    const handleChange=(e,statename)=>{
        if(statename==="email"){
            setEmail(e.target.value)
        }
        if(statename==="age"){
            setage(e.target.value)
        }
        if(statename==="role"){
            setrole(e.target.value)
        }
        if(statename==="country"){
            setcountry(e.target.value)
        }
        if(statename==="pincode"){
            setpincode(e.target.value)
        }
        if(statename==="password"){
            setpassword(e.target.value)
        }
        if(statename==="address"){
            setaddress(e.target.value)
        }
    }
    const handleLogin=async (e)=>{
        e.preventDefault()
        try{
        const response=await axios.post("http://localhost:3003/signup",{"email":email,"password":password,"role":role,"age":age,"country":country,"pincode":pincode,"address":address})
    
        setMessage(response.data.msg)
        setFlag(response.data.status)
        console.log(response)

        }
        catch(err){
            console.log(err)
        }

    }
  
return(
    <div className="container">
        <form>
            <div>
            <div><h1>Please !! Sign up if YOU are new User</h1></div>
            <label htmlFor="email">Email</label>
            <input type="text" onChange={(e)=>handleChange(e,"email")}></input>
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e)=>handleChange(e,"password")}></input>
            </div>
            <div>
            <label htmlFor="role">Role</label>
            <input type="text" onChange={(e)=>handleChange(e,"role")}></input>
            </div>
            <div>
            <label htmlFor="age">Age</label>
            <input type="text" onChange={(e)=>handleChange(e,"age")}></input>
            </div>
            <div>
            <label htmlFor="country">Country</label>
            <input type="text" onChange={(e)=>handleChange(e,"country")}></input>
            </div>
            <div>
            <label htmlFor="pincode">Pincode</label>
            <input type="text" onChange={(e)=>handleChange(e,"pincode")}></input>
            </div>
            <div>
            <label htmlFor="address">Address</label>
            <input type="text" onChange={(e)=>handleChange(e,"address")}></input>
            </div>           
           {/* <button  className="signup" onClick={(e)=>handleLogin(e)}>Send</button>*/}
           <input type="submit" value="Sign Up" onClick={(e)=>handleLogin(e)}></input>
           {/*<NavLink
                className="navbar-item" activeClassName="is-active" to="/" exact>Back
           </NavLink>*/}
            <div className="email">
                <a href="/">back</a>
            </div>

        </form>
        {
             flag?navigate(`/dashboard`):<h1>{message}</h1>

        }
    </div>
)
}
export default SignUpComponent