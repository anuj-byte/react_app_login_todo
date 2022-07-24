import TodoComponentI from "./todo"
import "./todostyle.css"
const CompeletedItems=(props)=>{
    /*console.log("this is props",props.deleteFun)*/

   
    return(
        <div >
            <h2>Completed Tasks list</h2>
            {
                props.tododata.map((item)=>{
                    return item.status&&<div>
                        <h3>{item.title}</h3>
                        <p>{item.story}</p>
                    <button onClick={()=>props.deleteFun(item.id)}>delete</button>
                    <hr/>
                        </div>
                })
            }
        </div>
    )
}
export default CompeletedItems