import {useEffect,useState} from "react"
import axios from "axios"
import CompeletedItems from "./completediteam"
import "./todostyle.css"
import { Link } from "react-router-dom"
<Link hrefLang="https://www.w3schools.com/w3css/4/w3.css"></Link>
const TodoComponentI=()=>{
    const [email,setEmail]=useState("")
    const [id,setId]=useState(0)
    const [title,setTitle]=useState("")
    const [story,setStory]=useState("")
    const [data,setData]=useState([])
    useEffect(
        ()=>{
            axios.get("http://localhost:3003/get-task").then((res)=>setData(res.data)).catch((err)=>console.log(err))
        },[data]
    )
    const handleChange=(e,tag)=>{
        if(tag==="story"){
            setStory(e.target.value)
        }
        if(tag==="title"){
            setTitle(e.target.value)

        }
        if(tag==="email"){
            setEmail(e.target.value)
        }

    }
    const addItem=(e)=>{
        e.preventDefault()
        setId(id+1)
        axios.post("http://localhost:3003/create",{
        email:email,
        id:id,
        title:title,
        story:story,
        status:false
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>console.log(err))
    }

    const changeCompletion=(itemid)=>{
        axios.get(`http://localhost:3003/done-task/${itemid}`).then((res)=>{
            const temp=[...data]
            const obj=temp.find((item)=>item.id===itemid)
            obj.status=!obj.status
            setData(temp)
        }).catch((err)=>console.log(err))
    }
    const deletetask=(itemid)=>{
        axios.get(`http://localhost:3003/delete-task/${itemid}`).then((res)=>{
            const temp=[...data]
            const obj=temp.filter((item)=>item.id!==itemid)
            setData(obj)

        }).catch((err)=>console.log(err))
    }
    return(
        <body>
        <div className="background">
            <h1 className="header">Todo Component</h1>
            Email:<input type="text" className="textarea" onChange={(e)=>handleChange(e,"email")}></input>
            Title:<input type="text" className="textarea" onChange={(e)=>handleChange(e,"title")}></input>
            Story:<input type="text"  className="story" onChange={(e)=>handleChange(e,"story")}></input>
            <button onClick={(e)=>addItem(e)}>Add</button>
            <hr/>
            <div><h2>Pending task</h2></div>

            {   
                data.map((item)=>(
                    <div>
                        {item.status?<></>:
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.story}</p>
                            <button onClick={()=>changeCompletion(item.id)}>done</button>
                            <hr/>
                        </div>
                        }
                    
                    </div>
                ))
            }
            <CompeletedItems tododata={data} deleteFun={deletetask}></CompeletedItems>
        </div>
        </body>
    )
}
export default TodoComponentI