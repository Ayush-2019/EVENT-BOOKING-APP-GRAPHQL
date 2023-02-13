import { border, color } from "@mui/system";
import React, { Component, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import {token, userID, tokenexpire} from '../../utils';

class MainNav extends Component {

     t = token;

    static contextType = AuthContext;
     logout = ()=>{
        localStorage.clear();
        window.location.reload();
        
    };

    render(){
    return (
     <AuthContext.Consumer>
        {(context) => {
            return(
                <header className="main_nav">
                    <div className="main_nav_logo">
                        <h3>Dream Events</h3>
                    </div>
        
                    <nav className="main_nav_items">
                        <ul>
                            <li>
                                <NavLink to='/events'>
                                    Events
                                </NavLink>
                            </li>
        
                            {this.t && <React.Fragment><li>
                                <NavLink to='/bookings'>
                                Bookings
                                </NavLink>
                            </li><li>
                            <button onClick={this.logout} style = {{
                                background:'none',
                                color:'white',
                                fontSize:'15px',
                                border:'none',
                                cursor:'pointer'
                            }}>
                                Log Out
                                </button>
                                </li></React.Fragment>}

                            {!this.t && 
                            <li>
                                <NavLink to='/auth'>
                                    Authenticate
                                </NavLink>
                            </li>}
                        </ul>
                    </nav>
                </header>
                
            )
        }}
        </AuthContext.Consumer>
    
);
    }
    }

export default MainNav;