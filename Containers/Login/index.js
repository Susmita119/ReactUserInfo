import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import '../style.css'
import SignIn from '../../Containers/SignIn/index.js'
import CustomButton from  '../../Components/Shared/Button/index.js'
import CustomInput from '../../Components/Shared/Input/index.js'
import { Button } from 'reactstrap';
//<Linkify properties={{ target: '_blank' }}>Create a account </Linkify>
//<input type="submit" value="Log In" data-test="submit" />
//<CustomButton name="admin..." /> 
// <h1>{this.state.logins[0].pass}</h1>
//<h1>{this.state.isAdmin ? "yes" : "no"}</h1>
//<CustomInput getUser = {this.getUser} />        



class Login extends React.Component{
constructor(props){
super(props);

this.state = {
  
  userName: "",
  password: "",
  
isAdmin : false
};

console.log("in constructor");
}


handleChange= event =>{
  event.preventDefault();
  this.setState(
      {
       [event.target.name] : event.target.value 
      }

  );
     
};


handleClicked = event =>{
  event.preventDefault();
  const loggedUser ={
    userName : this.state.userName,
    password : this.state.password
  };

  axios.post("http://10.0.2.252:5000/users/signIn",loggedUser,{
    headers: {
      "Content-Type": "application/json"
    }

  })
  .then(Response =>{
    console.log(Response);
    console.log("Data Value of token ",Response.data.accessToken);
  })
  .catch(error => {
    console.log(error.response);
  });
  
  console.log(loggedUser);
};

render(){
  console.log("in render");
return(
<div className="Login">
        <div>
          <form>
         <br></br>
         <label>User Name : </label>
          <input
            type="text"
            name="userName"
            data-test="userName"
            onChange={this.handleChange}
          />
          <br></br>
          <label >Password : </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={this.handleChange}
          />
          <br></br>
          <button type="submit" onClick={this.handleClicked} >Login</button> <Link to="/SignIn">Create a account</Link>
          <switch>
            <Route exact path="/SignIn" component={SignIn}></Route> 
          </switch>
                    
          </form>
        </div>

</div>


);

}

}

export default Login;


