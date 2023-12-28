import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";



export default function Users(){


    const [users,Setusers]=useState([])

    const [run,Setrun]=useState(0)

   
useEffect(()=> {
    fetch("http://127.0.0.1:8000/api/user/show")
    .then((res) =>res.json())
    .then((data)=> Setusers(data))
}, [run]);

async function DeletUser(id){
    try{
     const res = await  axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
     if(res.status === 200){
        Setrun((prev) => prev + 1);
     }
    }catch {}
    }


const DataShow = users.map((users,index) => (<tr key={index}>
    <td>{index +1}</td>
    <td>{users.name}</td>
    <td>{users.email}</td>
    <td><i onClick={()=>DeletUser(users.id)} className="fa-solid fa-trash" style={{color: "red" ,cursor:"pointer", paddingRight:"30px"}}></i>
    < Link to={`${users.id}`} ><i className="fa-solid fa-pen-to-square" style={{color: "#00ff11",cursor:"pointer"}}></i></Link></td>


</tr>))
    return(<div style={{
        padding:"80px"
    }}>
        <table className="tabel">
            <thead>
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                </tr>
                


            </thead>
            
            <tbody>
                {DataShow}
            </tbody>
        </table>
    </div>)
}