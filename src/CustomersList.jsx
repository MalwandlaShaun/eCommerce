import React, {Component} from "react";

export default class CustomersList extends Component{
    
    state = {
        pageTitle :"Customers",
        customerCount : 5,
        customers:[
            {id:1, name:"Scott", phone:"123-456", address:{city : "Cape Town"}, photo:"https://picsum.photos/id/1010/60"  },
            {id:2, name:"Jones", phone:"982-014",address:{city : "Durban"}, photo:"https://picsum.photos/id/1011/60" },
            {id:3, name:"Allen", phone:"889-921",address:{city : "Johannesburg"}, photo:"https://picsum.photos/id/1012/60" },
            {id:4, name:"James", phone:"",address:{city : "Pretoria" }, photo:"https://picsum.photos/id/1013/60"},
            {id:5, name:"John", phone:"",address:{city : "Four-ways"}, photo:"https://picsum.photos/id/1014/60"  }
        ]
    };
    

    render(){
        return <div>
            <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}
            <span className="badge badge-secondary m-2">{this.state.customerCount}</span>
            <button onClick={this.onRefreshClick} className="btn btn-info">Refresh</button>
            
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                   {this.onRenderCustomer()}
                </tbody>
            </table>
        </div>
    }

    onRefreshClick = () => {
        this.setState({
            customerCount : 7
        })
    }

    onRenderPhone = (phone) => {
        return(
            phone ? (phone) : (<div className="bg-warning p-2 text-center"> No phone </div>) 
        )
    }

    onRenderCustomer = () => {
        return(
            
                this.state.customers.map((cust,index) =>{
                    return (
                    <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>
                        <img src={cust.photo} alt="Customer"/>
                        <button className="btn btn-secondary" onClick={()=>{this.onChangePicture(cust,index)}}>Change Picture</button>
                    </td>
                    <td>{cust.name}</td>
                    <td>{this.onRenderPhone(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                    </tr>
                    )
                })
            
        )
    }

    onChangePicture = (cust,index) => {
        let picArr = this.state.customers;
        picArr[index].photo = "https://picsum.photos/id/350/60"

        this.setState({
            customers: picArr
        })
    }
}
