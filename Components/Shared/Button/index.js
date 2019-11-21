import React from 'react';
import { Button } from 'reactstrap';


class CustomButton extends React.Component{
    constructor(props){
        super(props);

        console.log("In const",props.name);
    }
render(){

    function clicked(props){
        console.log(props.name);
    return (<h1>{props.name}</h1>);
    }


    
/* clicked = (props) => { 
return (<h1>{props.name}</h1>);
}*/

return(
<Button color="danger" onClick={this.clicked}> Log In </Button>

);


}



}

export default CustomButton;