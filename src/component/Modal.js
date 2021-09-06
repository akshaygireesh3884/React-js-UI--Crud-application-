import axios from "axios";
import React, { useEffect,useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Box = (props) => {
  const [empDetails,setEmployeeDetails] = useState([]);
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false);
     window.location.reload(false)
  }

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/v1/employeeserv/employees/${props.data}`).then(response =>{
           setEmployeeDetails(response.data)
        }
   )
   .catch(error=>console.log(error));
  })

    return (
      <>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
        </div>
        <Modal  show={setModalIsOpenToTrue} onHide={setModalIsOpenToFalse}>
          <Modal.Header closeButton>
            <Modal.Title>{empDetails.firstName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                  <div><span>ID:</span><span>{empDetails.id}</span></div>
                  <div><span>First Name:</span><span>{empDetails.firstName}</span></div>
                  <div><span>Last Name:</span><span>{empDetails.lastName}</span></div>
                  <div><span>Role:</span><span>{empDetails.role}</span></div>
                  <div><span>Designation:</span><span>{empDetails.designation}</span></div>
                  <div><span>Salary:</span><span>{empDetails.salary}</span></div>
                  <div><span>DOJ:</span><span>{empDetails.doj}</span></div>
                  <div><span>Address:</span><span>{empDetails.address}</span></div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={setModalIsOpenToFalse}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );

        }
export default Box;