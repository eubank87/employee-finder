import React from "react";

function Employee (props){
    return(
        <tr>
        <th scope="row"><img alt="employee-photo" src={props.photo}/></th>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.city}, {props.state}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        </tr>
    )
}

export default Employee;