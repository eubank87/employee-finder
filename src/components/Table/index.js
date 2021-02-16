import React, { Component } from "react";
import Employee from "../Employee";
import API from "../../utils/API"
import "./style.css"

class Table extends Component{
    state = {
        employees: [],
        sortedEmployees:[]
    }

    componentDidMount(){
        API.search()
        .then(res=> this.setState({employees: res.data.results, sortedEmployees: res.data.results}))
        .catch(err => console.log(err));
    }

    handleFirstName = ()=>{
        const sorted = this.state.sortedEmployees.sort((a, b)=>{
            if(a.name.first > b.name.first){
                return 1
            } if(a.name.first < b.name.first){
                return -1
            }
            return 0
        })
        this.setState({sortedEmployees: sorted})
    }

    handleLastName = ()=>{
        const sorted = this.state.sortedEmployees.sort((a, b)=>{
            if(a.name.last > b.name.last){
                return 1
            } if(a.name.last < b.name.last){
                return -1
            }
            return 0
        })
        this.setState({sortedEmployees: sorted})
    }

    handleLocation = ()=>{
        const sorted = this.state.sortedEmployees.sort((a, b)=>{
            if(a.location.state > b.location.state){
                return 1
            } if(a.location.state < b.location.state){
                return -1
            }
            return 0
        })
        this.setState({sortedEmployees: sorted})
    }


    render(){
        return(<div>
            <div className="searchForm">
                <form className="form-inline" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Employee Name" name="search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <table className="table table-dark table-striped">
                <thead className="thead">
                    <tr className="tablehead">
                        <th scope="col">Photo</th>
                        <th scope="col" onClick={this.handleFirstName} className="firstName">First Name</th>
                        <th scope="col" onClick={this.handleLastName} className="lastName">Last Name</th>
                        <th scope="col" onClick={this.handleLocation} className="locationState">Location</th>
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
        </div>

        )
    }

}

export default Table;