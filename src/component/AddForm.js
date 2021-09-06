import axios from 'axios';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './AddForm.css';
class AddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            showForm: false,
            firstName:"",
            lastName:"",
            role:"",
            designation:"",
            salary:"",
            doj:"",
            address:""
        };
    }
  
     inputSet =(e) =>{
         this.setState({[e.target.name]:e.target.value})
     }
     saveEmployee = (e) =>{
         e.preventDefault();
        axios.post("http://localhost:8080/api/v1/employeeserv/employees",{
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            role:this.state.role,
            designation:this.state.designation,
            salary:this.state.salary,
            doj:this.state.doj,
            address:this.state.address,
        }).then((response)=>{
            alert("saved");
            this.setState({ redirect: true });  
        }).then(<Redirect to={"/"}></Redirect>).catch(error=>console.log(error));
     }
   render(){
        return (
            <div id ="form">
                <form> 
                        <div className ="form-group">
                            <label>First Name</label>
                            <input type="text" onChange={this.inputSet} name="firstName" className="form-control"/>
                        </div>   
                        <div className ="form-group">
                            <label>Last Name</label>
                            <input type="text" onChange={this.inputSet} name="lastName" className="form-control"/>
                        </div>
                        <div className ="form-group">
                            <label>Role</label>
                            <input type="text" onChange={this.inputSet} name="role" className="form-control"/>
                        </div>
                        <div className ="form-group">
                            <label>Designation</label>
                            <input type="text" onChange={this.inputSet} name="designation" className="form-control"/>
                        </div> 
                        <div className ="form-group">
                            <label>Salary</label>
                            <input type="number" onChange={this.inputSet} name="salary" className="form-control"/>
                        </div> 
                        <div className ="form-group"> 
                            <label>DOJ</label>
                            <input type="date"onChange={this.inputSet} name="doj" className="form-control"/>
                        </div>
                        <div className ="form-group"> 
                            <label>Address</label>
                            <input type="text" onChange={this.inputSet} name="address" className="form-control"/>
                        </div>
                        <div className ="form-group"> 
                             <button onClick={this.saveEmployee} className="btn btn-primary">Save</button>
                        </div>
                </form> 
            </div>
        );
}

}
export default AddForm