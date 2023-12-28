import im1 from "./Assets/imge1.webp"
import im3 from"./Assets/imge3.webp"
import im4 from"./Assets/imge4.webp"
import im5 from"./Assets/imge5.webp"
import im6 from"./Assets/image6.webp"
import im7 from"./Assets/image7.webp"
import im8 from"./Assets/image8.webp"




export default function Pro(){
    return(
        <div className="parent-img">

           <div  style={{display:"flex", zIndex:"2"}}><img src={im1} alt="1"  /><i  id="heart"  className="fa-solid fa-heart" onClick={Ch}></i></div>
            <div  style={{display:"flex", zIndex:"2"}}><img src={im3} alt="1"  /><i  id="heart"  className="fa-solid fa-heart"></i></div>
            <div  style={{display:"flex", zIndex:"2"}}><img src={im4} alt="1"  /><i  id="heart"  className="fa-solid fa-heart"></i></div>
            <div  style={{display:"flex", zIndex:"2"}}><img src={im5} alt="1"  /><i  id="heart"  className="fa-solid fa-heart"></i></div>
            <div  style={{display:"flex", zIndex:"2"}}><img src={im6} alt="1"  /><i  id="heart"  className="fa-solid fa-heart"></i></div>
            <div  style={{display:"flex", zIndex:"2"}}><img src={im7} alt="1"  /><i  id="heart"  className="fa-solid fa-heart"></i></div>
            <div  style={{display:"flex", zIndex:"2"}}><img src={im8} alt="1"  /><i  id="heart"  className="fa-solid fa-heart"></i></div>
            

        </div>
      
        
    )
}
