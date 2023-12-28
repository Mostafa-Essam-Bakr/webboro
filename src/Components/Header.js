
import { Link } from "react-router-dom"
function remov(){
    window.localStorage.removeItem("email","password","name")
    window.location.pathname="/login"
}
export default function Hed(){
    return(<nav style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"white",height:"50px",
    backgroundColor: "rgb(82, 113, 141)"}}>
       

        <h1 className="hom">Home</h1>
        <h1 className="abt">About</h1>

        

{ !window.localStorage.getItem("email") ?<div style={{display:"flex",width:"270px",justifyContent:"space-between"}}> < Link to="/Register" className="h1" style={{ 
         width:"120px",textAlign:"center",borderRadius:"10px"}}>Register</Link>
          <Link to="/Login" className="h2" style={{
         width:"120px",textAlign:"center",borderRadius:"10px"}}>login</Link>
</div>
:<div className="h1" style={{ 
    width:"120px",textAlign:"center",borderRadius:"10px"}} onClick={remov}>Logout</div>
}
       



         
        </nav>)
}