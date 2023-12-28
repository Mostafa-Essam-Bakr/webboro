import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='h1' style={{height: "25px",
    display:" flex",
    justifyContent:" center",
    alignItems:" center",
    border:" none",
}}>
        Launch
      </Button>

      <Offcanvas className="mo" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{color:"white", fontSize:"xx-large"}}>My Acount</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="lunch">
        <i className="fa-solid fa-plane"></i>   

        <i className="fa-solid fa-person-walking-luggage"></i>

        <i className="fa-solid fa-house-fire"></i>
        <i className="fa-solid fa-umbrella-beach"></i>
        <i className="fa-solid fa-earth-asia"></i>
        <i className="fa-solid fa-phone-volume"></i>
        <i className="fa-solid fa-gear"></i>

</div>
      
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;