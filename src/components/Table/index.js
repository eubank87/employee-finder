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

    handleInputChange = event => {
        const filter = event.target.value;
        const filtered = this.state.employees.filter(item =>{
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({sortedEmployees: filtered})
    };

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

    handleSubmit = event =>{
        event.preventDefault();

        const employeeFilter = this.state.employees.filter((employee)=>{
            const fullName = `${employee.name.first} ${employee.name.last}`;
            return fullName.toLowerCase().includes(this.state.search.toLowerCase())
        })
        this.setState({sortedEmployees: employeeFilter})
    }


    render(){
        return(<div>
            <div className="searchForm">
                <p className="ptag">Or, you can type in a name to search for a specific employee.</p>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInputChange} className="form-control mr-sm-2" type="text" placeholder="Employee Name" name="search"/>
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
                    {this.state.sortedEmployees.map((employee, index)=> <Employee
                        key= {index} 
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