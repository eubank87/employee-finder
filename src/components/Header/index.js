import React from "react";
import "./style.css"

function Header(){
    return (
        <div className="header">
            <h1>Welcome to your employee directory!</h1>
            <p>You can click to sort by first name, last name and location.</p>
            <p>Or, you can type in a name to search for a specific employee---maybe.</p>
        </div>
    )
}

export default Header;