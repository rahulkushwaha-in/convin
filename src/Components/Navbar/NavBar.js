import logo from "./../../images/logo.png"
import "./navbar.css"
import {useState} from "react";
function NavBar()
{   const [onHover,setonHover]=useState(true);
    return (
        <>
            <div  className="nav-container">
                <div className="left-logo">
                    <img src={logo} alt=""></img>
                </div>
                <div className="middle">
                    <ul>
                        <li><a href="# ">Pricing</a></li>
                        <li><a href="# ">Products</a></li>
                        <li className="x"
                        
                        onMouseLeave={() => setonHover(true)}><a href="# " onMouseEnter={() => setonHover(false)}>Integrations</a>
                        <div className={onHover?"integration-dropdow":"integration-dropdow active "}>
                            <li><a href="# ">Team Messaging</a></li>
                            <li><a href="# ">Video Conferencing</a></li>
                            <li><a href="# ">Calender</a></li>
                            <li><a href="# ">Dialer</a></li>
                            <li><a href="# ">CRM</a></li>
                            
                        </div>
                        </li>

                        <li><a href="# ">Solutions</a>
                        <div className="solution-dropdown integration-dropdow">
                           
                            <li><a href="# ">For Account Exces</a></li>
                            <li><a href="# ">Sales Onboarding</a></li>
                            <li><a href="# ">For Sales Managers</a></li>
                            <li><a href="# ">Sales Training</a></li>
                            <li><a href="# ">For Sales Leader</a></li>
                            <li><a href="# ">Process Monitoring</a></li>
                            <li><a href="# ">Market Intelligence</a></li>
                            <li><a href="# ">Sales Strategy</a></li>
                            <li><a href="# ">People Intelligence</a></li>
                            <li><a href="# ">Meeting Intelligence</a></li>
                            <li><a href="# ">Sales Enablement</a></li>
                            <li><a href="# ">Quality Managment</a></li>
                        
                            {/* <div className="dropdown-right integration-dropdow">
                            
                            </div> */}
                        </div>
                        </li>
                        <li><a href="# ">Resources</a>
                        <div className="integration-dropdow">
                            <li><a href="# ">product1</a></li>
                            <li><a href="# ">product1</a></li>
                            <li><a href="# ">product1</a></li>
                            <li><a href="# ">product1</a></li>
                            <li><a href="# ">product1</a></li>
                            <li><a href="# ">product1</a></li>
                        </div>
                        </li>
                        <li><a href="# ">About Us</a></li>
                    </ul>
                </div>
                <div className="right-button">
                    <button>Book a Demo</button>
                    <button className="button">Sign Up</button>
                </div>
            </div>
        </>
    )
};

export default NavBar;