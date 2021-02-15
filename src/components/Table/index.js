import React, { Component } from "react";
import Employee from "../Employee";
import API from "../../utils/API"

class Table extends Component{
    state = {
        employees: []
    }

    componentDidMount(){
        API.search()
        .then(res=> this.setState({employees: res.data.results}))
        .catch(err => console.log(err));
    }

    render(){
        return(
            <table className="table table-striped">
                <thead className="thead">
                    <tr>
                        <th scope="col">Photo</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(employee=> <Employee
                        key= {employee.login.uuid} 
                        photo= {employee.picture.thumbnail}
                        firstName= {employee.name.first}
                        lastName= {employee.name.last}
                        city= {employee.location.city}
                        state= {employee.location.state}
                        email= {employee.email}
                        phone= {employee.cell}
                    />)}
                </tbody>
            </table>
        )
    }

}

export default Table;