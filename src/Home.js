

import { Form, Link } from "react-router-dom";
import Pro from "./Product";
import IndividualIntervalsExample from "./Components/Sliderimg"
import Example from "./Lunch";
import cover from "./Assets/imge2.webp"

export default function Home(){
    return(<div>
        <nav className="navhom" style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"white",height:"50px",
    backgroundColor: "rgb(82, 113, 141)"}}> <h1 className="logo"><i className="fa-solid fa-square-h fa-lg"></i>ome</h1>
               <Link to="./Book" className="h1" > Book </Link>



<Example/>


















               
                  

        <Link to="/Dashbord" className="h1" > Admin </Link>   
             <Link to="/Login" className="h1" > LOG OUT </Link>
</nav>

<div> <img src={cover} className="cover"/></div>

<div>

<IndividualIntervalsExample />


</div>

<div className="bs"><button className="b1" type="submit">Book your place</button>
<button  className="b2" type="submit" >Type Hotel</button></div>


<div>
    <Pro />
</div>













    </div>)
}