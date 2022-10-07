import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Dashboard.css';

const Dashboard = () => {
    // const homeClass = location.pathname === "/" ? "active" : "";
    const dashboardClass = window.location.pathname === "/dashboard/home" ? "active" : "";
    const employeeClass = window.location.pathname === "/dashboard/employees" ? "active" : "";
    const accountOwnersClass = window.location.pathname === "/dashboard/accountowners" ? "active" : "";
    const resetpasswordClass = window.location.pathname === "/dashboard/resetpassword" ? "active" : "";
    console.log(dashboardClass," :::: ",resetpasswordClass);
     const logoutfunction =()=>{
        if (window.confirm("Do you really want to logout?")) {
            
            // useNavigate('/');
        }
     }
    return (
        <>
            <div className="bodyclassdb">
            <div className="containers">
                <nav>
                    <ul>
                        <li><Link to="/dashboard/home" className={dashboardClass}>Home</Link></li>
                        <li><Link to="/dashboard/employees" className={employeeClass}>Employees</Link></li>
                        <li><Link to="/dashboard/accountowners" className={accountOwnersClass}>Account Owners</Link></li>
                        <li><Link to="/dashboard/resetpassword" className={resetpasswordClass}>Reset Password</Link></li>
                        <li><a href="/" className="logout" onClick={logoutfunction}>Logout</a></li>
                    </ul>
                </nav>
                <div className="downdi">
                    {/* <div className="header">
                        <h5>Hey, Welcome Employees !</h5>
                    </div> */}
                    <Outlet/>
                </div>
            </div>
            </div>
        </>
    );
}
export default Dashboard;