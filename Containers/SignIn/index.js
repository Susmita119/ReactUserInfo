import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { FaBeer } from 'react-icons/fa';
import { IoIosBody ,IoIosKey } from "react-icons/io";
import CustomButton from  '../../Components/Shared/Button/index.js'
import CustomInput from '../../Components/Shared/Input/index.js'
import { Button } from 'reactstrap';
//<Linkify properties={{ target: '_blank' }}>Create a account </Linkify>
//<input type="submit" value="Log In" data-test="submit" />
class SignIn extends React.Component{
constructor(props){
  super(props);

 this.state= {
  
 
    emailId: "",
    mobileNo: "",
    password: "",
    userName: "",
    userRoll: {
      rollId: ""
    }
   

 };

 const createUser = {
  emailId :this.state.emailId,
  mobileNo: this.state.mobileNo,
  password: this.state.password,
  userName: this.state.userName,
  userRoll: {
    rollId:this.state.rollId
  }
};

console.log("In create user:",createUser);

}



handleClick = () => {
 
  const createUser = {
    emailId :this.state.emailId,
    mobileNo: this.state.mobileNo,
    password: this.state.password,
    userName: this.state.userName,
    userRoll: {
      rollId:this.state.rollId
    }
  };
  axios.post("http://10.0.2.252:5000/users/signUp",{createUser})
  .then(res=>{
    console.log(res);
    console.log(res.data);
  });

  /*fetch("http://10.0.2.252:5000/users/signUp", {
  method: "POST",
  headers: {
    
    "Content-Type": "application/json"
  },
  body : JSON.stringify({
    "authorize": "N",
    "emailId": "test3@test.com",
    "mobileNo": "3158175224",
    "password": "test2121",
    "userName": "user123",
    "userRoll": {
      "rollId": "1"
    }
  })
  
  
})
.then(res => res.json())
  .then(data => console.log(data)); */ 
  
  
  console.log("In create user:",createUser);
  console.log(' handle this is:', this);
}; 

handleChange=(event) =>{
/*this.setState({createUser : 
  {[event.target.name]: event.target.value}
})*/
event.preventDefault();
this.setState({[event.target.name]: event.target.value})
  
 
}



render(){
  console.log("In render",this.state.createUser);
return(
<div className="SignIn">
        <form>
            <br></br>
            <label>User Name : </label>
            <input type="text" name="userName" data-test="userName" onChange = {this.handleChange} />
            <br></br>
            <label>Email Add : </label>
            <input type= "email" name="emailId" onChange = {this.handleChange} />
            <br></br>
            <label>User Role : </label>
            <select type="select"  name="userRoll" placeholder="--select--" onChange = {this.handleChange} >
            <option name="rollId" value="1">1</option>
            <option name="rollId" value="2">2</option>
            <option name="rollId" value="3">3</option>
            </select>
            <br></br>
            <label>Password : </label>
            <input name="password" type="password" placeholder="Enter your password"  onChange = {this.handleChange}/>
            <br></br>
            <label>Mobile no : </label>
            <input type="text" name="mobileNo" data-test="username"   onChange = {this.handleChange}/>
            <br></br>
             <h3> Lets go for a <IoIosBody/>? </h3>
            <button onClick={this.handleClick} >Singn Up </button>

          <br></br>
         
       </form>
       </div>


);

}

}
export default SignIn;





