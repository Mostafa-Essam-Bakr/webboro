import { Link } from "react-router-dom";

export default function Topbar(){
    return(<div style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"white",height:"50px",
    backgroundColor: "rgb(82, 113, 141)"}} className="top-bar">

<h1>Store</h1>
<Link to="/" className="h2"> Go To Web Site </Link>
    </div>)
}