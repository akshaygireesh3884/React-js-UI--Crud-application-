// import axios from 'axios';
// import React, { Component } from 'react';
// import './Test.css';
// import { BasicTable } from './BasicTable';
// class Test extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             showForm: false,
//             firstName:"",
//             lastName:"",
//             role:"",
//             designation:"",
//             salary:"",
//             doj:"",
//             address:"",
//         };
//     }
//     clickButton = (e) => {
//         this.setState({showForm:!this.state.showForm})
//      }
//      inputSet =(e) =>{
//          this.setState({[e.target.name]:e.target.value})
//      }
//      saveEmployee = (e) =>{
//          e.preventDefault();
//         //  var body = {
//         //     firstName:this.state.firstName,
//         //     lastName:this.state.lastName,
//         //     role:this.state.role,
//         //     designation:this.state.designation,
//         //     salary:this.state.salary,
//         //     doj:this.state.doj,
//         //     address:this.state.address,
//         //  }
//         axios.post("http://localhost:8080/api/v1/employeeserv/employees",{
//             firstName:this.state.firstName,
//             lastName:this.state.lastName,
//             role:this.state.role,
//             designation:this.state.designation,
//             salary:this.state.salary,
//             doj:this.state.doj,
//             address:this.state.address,
//         }).then((response)=>{
//             alert("saved");
           

//         })
//      }
//    render(){
//      const x =this.state.showForm ;
//         return (
//             <div id ="form">
//             <button   onClick={() =>this.clickButton()}>Add</button>
//             {x && (
//                 <form> 
//                         <div className ="form-group">
//                             <label>First Name</label>
//                             <input type="text" onChange={this.inputSet} name="firstName" className="form-control"/>
//                         </div>   
//                         <div className ="form-group">
//                             <label>Last Name</label>
//                             <input type="text" onChange={this.inputSet} name="lastName" className="form-control"/>
//                         </div>
//                         <div className ="form-group">
//                             <label>Role</label>
//                             <input type="text" onChange={this.inputSet} name="role" className="form-control"/>
//                         </div>
//                         <div className ="form-group">
//                             <label>Designation</label>
//                             <input type="text" onChange={this.inputSet} name="designation" className="form-control"/>
//                         </div> 
//                         <div className ="form-group">
//                             <label>Salary</label>
//                             <input type="number" onChange={this.inputSet} name="salary" className="form-control"/>
//                         </div> 
//                         <div className ="form-group"> 
//                             <label>DOJ</label>
//                             <input type="text"onChange={this.inputSet} name="doj" className="form-control"/>
//                         </div>
//                         <div className ="form-group"> 
//                             <label>Address</label>
//                             <input type="text" onChange={this.inputSet} name="address" className="form-control"/>
//                         </div>
//                         <div className ="form-group"> 
//                              <button onClick={this.saveEmployee} className="btn btn-primary">Save</button>
//                         </div>
//                 </form> 
                
//             )}
//             </div>
//         );
// }

// }
// export default Test