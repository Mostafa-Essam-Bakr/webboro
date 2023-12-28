import { useState } from "react";
import axios from "axios";
import Hed from "./Header"


export default function Login (){


    const [email,SetEmail]=useState('')
    const [password,SetPssword]=useState('')
    const [accept,SetAccept]=useState(false)
    const [EmailErr,SetEmailerr]=useState("")
    



    async function Submit(e){
       let flag=true;
        e.preventDefault();
        SetAccept(true)
        if ( password.length<=8 ){
           flag=false;
        } else flag=true;
        

        try{

        if(flag){
    let res = await axios.post("http://127.0.0.1:8000/api/login",{
    email:email,
    password: password,
         }) ;
         if (res.status === 200){
            window.localStorage.setItem("email",email)
          


            window.location.pathname ="/"
         }
        }}catch(err){
            SetEmailerr(err.response.status)
        }
       
    }

    
    return (
    
    
    <div><Hed /><div className="pfrm1">
        
        <form className="frm1" onSubmit={Submit}>

       

            <label htmlFor="email"> Email</label>
            <input type="email" name="email" placeholder="Email" id="email"  value={email} required
                        onChange={(e) => SetEmail(e.target.value)}

            />
            {accept && EmailErr === 401 && <p>email is not corect</p>}

           
            <label htmlFor="password">  Pass word</label>
            <input type="password" name="password" placeholder="Pass word" id="password" value={password}
                        onChange={(e) => SetPssword(e.target.value)}

            />
            {password.length<=8 &&accept && <p className="error">password motr than 8 char</p>}

           
            <button type="submit">Login</button>
        </form>
    </div></div>)
    
    
}


/*import { useState } from "react";
import axios from "axios";

export default function SignUp (){


    const [name,SetName]=useState('')
    const [email,SetEmail]=useState('')
    const [password,SetPssword]=useState('')
    const [reppassword,SetReppassword]=useState('')
    const [accept,SetAccept]=useState(false)

   const [erremail,SetErremail]=useState("")

    async function Submit(e){
        let flag =true
        e.preventDefault();
        SetAccept(true)
        if (name === '' || password.length<=8 || reppassword !== password){
            flag=false
        }else flag=true;


  
try{
        if (flag){
         let res = await axios.post("http://127.0.0.1:8000/api/register",{
            name:name ,
            email: email,
            password: password,
            password_confirmtion:reppassword,
         });
         if (res.status === 204){
            window.localStorage.setItem("emaul",email)
            window.location.pathname = "/" ;
         }


        }} 
        catch (err){
            SetErremail(err.response.status );
        }
    }

    
    return (<div className="pfrm1">
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

            {accept && erremail === 422 && <p>Email is been taken</p>}

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

            <button type="submit">submit</button>
        </form>
    </div>)
} */