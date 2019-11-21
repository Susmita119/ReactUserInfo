import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import '../style.css'
import CustomButton from  '../../Components/Shared/Button/index.js'
import CustomInput from '../../Components/Shared/Input/index.js'
import { Button } from 'reactstrap';
//<Linkify properties={{ target: '_blank' }}>Create a account </Linkify>
//<input type="submit" value="Log In" data-test="submit" />
//<CustomButton name="admin..." /> 
// <h1>{this.state.logins[0].pass}</h1>
//<h1>{this.state.isAdmin ? "yes" : "no"}</h1>
         



class Login extends React.Component{
constructor(props){
super(props);

this.state = {
admin : [
{
  userName : "admin",
  ppassword : "1111"
}
],
logins :[],
isAdmin : false
};

console.log("in constructor");
}


getUser = (e) => {

  /*fetch("http://10.0.2.252:5000/users/signIn",{
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body :JSON.stringify({
      userName : 

    })


  })
  .then()*/



  console.log("in getuser fn...........................");
  e.preventDefault();
  const user=e.target.elements.username.value;
  axios.get("http://localhost:5000/users/signIn")
  .then((res)=>{
    console.log(res);
  });
  console.log(e);
  console.log(user);
}

componentDidMount(){
console.log("in didmount");
axios.get("https://jsonplaceholder.typicode.com/users")
.then(function(response){ 
  //this.setState({logins : response.data});
  console.log(response);
});

}
render(){
  console.log("in render");
return(
<div className="Login">
        <div>
        <CustomInput getUser = {this.getUser} />


          <br></br>
          <label htmlFor="email">Email : </label>
          <input name="email" type="text" placeholder="Enter your email" />
          <br></br>
          <label htmlFor="email">Password : </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <br></br>
          <button type="submit" >
            Login
          </button>
                    
          
        </div>

</div>


);

}

}

export default Login;


