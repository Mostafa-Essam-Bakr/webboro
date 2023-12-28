


import { useEffect, useState } from "react";
import axios from "axios";


export default function Updateuser(){
    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPssword]=useState('')
    const [reppassword,SetReppassword]=useState('')
    const [accept,SetAccept]=useState(false)
    const [EmailErr,SetEmailerr]=useState("")
    
const id = window.location.pathname.split("/").slice(-1)[0];

useEffect(()=>{
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
    .then((res)=> res.json())
    .then((data)=> {SetName(data[0].name)
    SetEmail(data[0].email)
//SetReppassword(data[0].password)


})
},[]);

    async function Submit(e){
       let flag=true;
        e.preventDefault();
        SetAccept(true)
        if (name === '' || password.length<=8 || reppassword !== password){
           flag=false;
        } else flag=true;
        

        try{

        if(flag){
    let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`,{
    name: name,
    email:email,
    password: password,
    password_confirmation: reppassword,
         }) ;
         if (res.status === 200){
            window.localStorage.setItem("email",email)
          


            window.location.pathname ="/Dashbord/Users"
         }
        }}catch(err){
            SetEmailerr(err.response.status)
        }
       
    }

    
    return (
    
    <div><div className="pfrm1">
        <form className="frm1" onSubmit={Submit}>

            <label htmlFor="name"> LastName </label>
            <input type="text" name="LastName" placeholder="LastName" id="name" value={name} 
                        onChange={(e) => SetName(e.target.value)}
            />
            {name === '' && accept &&  <p className="error">name is more than 3 char</p>}

            <label htmlFor="email"> Email</label>
            <input type="email" name="email" placeholder="Email" id="email"  value={email} required
                        onChange={(e) => SetEmail(e.target.value)}

            />
            {accept && EmailErr === 422 && <p>email is allready taken</p>}

           
            <label htmlFor="password">  Pass word</label>
            <input type="password" name="password" placeholder="Pass word" id="password" value={password}
                        onChange={(e) => SetPssword(e.target.value)}

            />
            {password.length<=8 &&accept && <p className="error">password motr than 8 char</p>}

            <label htmlFor="reppassword"> Repeat Pass word</label>
            <input type="password" name="password" placeholder="Repeat Pass word" id="reppassword" value={reppassword}
                        onChange={(e) => SetReppassword(e.target.value)}

            />
             {reppassword !== password && accept&& <p className="error">must similar password</p>}           

            <button type="submit">Update</button>
        </form>
    </div> </div>)
}