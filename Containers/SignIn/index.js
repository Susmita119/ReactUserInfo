import React from 'react';
import ReactDOM from 'react-dom';
import CustomButton from  '../../Components/Shared/Button/index.js'
import CustomInput from '../../Components/Shared/Input/index.js'
import { Button } from 'reactstrap';
//<Linkify properties={{ target: '_blank' }}>Create a account </Linkify>
//<input type="submit" value="Log In" data-test="submit" />
class SignIn extends React.Component{
render(){
return(
<div className="SignIn">
        <form>
        <label>User Name : </label>
            <input type= {<CustomInput/>} data-test="username"  />
            <br></br>
            <label>Email Add : </label>
            <input type= {<CustomInput/>} data-test="username"  />
            <br></br>
            <label>User Role : </label>
            <input type= {<CustomInput/>} data-test="username"  />
            <br></br>
          <label>Password : </label>
          <input type= {<CustomInput/> } data-test="username"  />
          <br></br>
          <CustomButton/>
       </form>
       </div>


);

}

}
export default SignIn;





