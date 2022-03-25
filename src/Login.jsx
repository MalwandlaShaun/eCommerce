import React, {Component} from "react";


export default class Login extends Component{
    constructor(props){
        super(props);

        this.state ={
            email: "",
            password: "",
            message: ""
        }
    }
    
    render(){
        return(
            <div className="col-lg-9">
                <h4 className="m-1 p-2 border-bottom">Login</h4>
                
                <div className="form-group form-row">
                    <label className="col-lg-4">Email:</label>
                    <input className="form-control" 
                    type="text" 
                    value={this.state.email} 
                    onChange = {(event)=>{ this.setState({ email: event.target.value, });  }}
                    />
                    
                </div>

                <div className="form-group form-row">
                    <label className="col-lg-4">Password:</label>
                    <input className="form-control" 
                    type="password" 
                    value={this.state.password}
                    onChange = {(event)=>{ this.setState({ password: event.target.value, });  }}
                    />
                </div>

                <div className="text-right">
                    <span>{this.state.message}</span>
                    <button className="btn btn-primary m-2" onClick={this.onLoginClick}>Login</button>
                </div>

            </div>
        );
    }//render ends here
    
    onLoginClick = async() => {
       console.log(this.state)
       let response = await fetch(`http://localhost:500/users?email=${this.state.email}&password=${this.state.password}`, {method: "GET"})
        let user = await response.json();
        console.log(user)
        if(user.length > 0){
            this.setState({ message: <span className="text-success">you have successfully logged-in</span>})
        } else{
            this.setState({ message: <span className="text-danger">invalid email or password, Please try again</span>})
        }

    }

}