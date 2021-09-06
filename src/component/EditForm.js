import React, { useState,useEffect } from "react";
import axios from 'axios'
import {useHistory, useParams } from "react-router-dom";
const EditForm = () => {
  let history = useHistory();
  const { id } = useParams();
  const [emp, setEmp] = useState({
    firstName:"",
    lastName:"",
    role:"",
    designation:"",
    salary:"",
    doj:"",
    address:"",
  });
  const {firstName,lastName, role, designation, salary,doj,address} = emp ;

  const onInputChange = e => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getEmployee();
  }, []);

  const getEmployee = () => {
    axios.get(`http://localhost:8080/api/v1/employeeserv/employees/${id}`).then(response =>{
        console.log(response.data)
        setEmp(response.data) ;
        }
     )
     .catch(error=>console.log(error));
  }
  const saveEmployee =  e => {
      console.log(emp.role);
    e.preventDefault();
    axios.put(`http://localhost:8080/api/v1/employeeserv/employees/${id}`,{
        role:role,
        designation:designation,
        address:address
    }).then(response =>{
           alert("saved");
           console.log(response.data);
           history.push("/"); 
           }
        )
        .catch(error=>console.log(error));
       
  };
  console.log(firstName);
  return (
        <div id ="form">
            <form> 
                    <div className ="form-group">
                        <label>First Name</label>
                        <input type="text" value={firstName} name="firstName"className="form-control"/>
                    </div>   
                    <div className ="form-group">
                        <label>Last Name</label>
                        <input type="text" value={lastName} name="lastName" className="form-control"/>
                    </div>
                    <div className ="form-group">
                        <label>Role</label>
                        <input type="text" value={role} onChange={onInputChange} name="role" className="form-control"/>
                    </div>
                    <div className ="form-group">
                        <label>Designation</label>
                        <input type="text" value={designation} onChange={onInputChange} name="designation" className="form-control"/>
                    </div> 
                    <div className ="form-group">
                        <label>Salary</label>
                        <input type="number"value={salary}  name="salary" className="form-control"/>
                    </div> 
                    <div className ="form-group"> 
                        <label>DOJ</label>
                        <input type="text" value={doj} name="doj" className="form-control"/>
                    </div>
                    <div className ="form-group"> 
                        <label>Address</label>
                        <input type="text" value={address} onChange={onInputChange} name="address" className="form-control"/>
                    </div>
                    <div className ="form-group"> 
                         <button onClick={saveEmployee} className="btn btn-primary">Save</button>
                    </div>
            </form> 
        </div>
    );
};
 
export default EditForm;