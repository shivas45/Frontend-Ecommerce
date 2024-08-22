import React from 'react'
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
    <div className="Footer ">
        <div className="container gx-0">
            <div className="row gx-0">
                <div className="col-md-4">
                    <div className="footer_col1 pb-5 pb-md-0">
                        <img src={logo} />
                        <div className="ft_icons pt-md-2 pb-md-4 py-3">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>

                        </div>
                        <p className="pt-2 pt-md-1">@2024 Copyright. All Rights Reserved</p>

                    </div>

                </div>
                <div className="col-md-3">
                <div className="footer_col2 pb-4 pb-md-0">
                    <h5 className="ft_h5">Get to Know Us</h5>
                    <ul>
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Home</NavLink>
                    </li>
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">About</NavLink>
                    </li>
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Products</NavLink>
                    </li>
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Contact Us</NavLink>
                    </li>
                        
                    </ul>

                </div>

                </div>
                <div className="col-md-3">
                <div className="footer_col2 ">
                <h5 className="ft_h5">Get to Know Us</h5>
                    <ul>
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Home</NavLink>
                    </li>
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">About</NavLink>
                    </li>
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Products</NavLink>
                    </li>
                    <li className="nav_li">
                        <NavLink className="text-decoration-none">Contact Us</NavLink>
                    </li>
                        
                    </ul>

                </div>

                </div>
                <div className="col-md-2">
                <div className="footer_col3 pb-4 pb-md-0">
                <h5 className="ft_h5">Contact Us</h5>
                <p className="py-2">
                    <i className="fa-solid fa-phone"></i>
                    +91 7765092460
                </p>
                <p className="py-2">
                    <i className="fa-solid fa-message"></i>
                    shivamkr5646@gmail.com
                </p>
                <p className="py-2">
                    <i className="fa-solid fa-location-dot"></i>
                    Patna, Bihar
                </p>


                </div>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
