import React from 'react'
import img from "../../../assets/mid_headphone.png";
import "./Discount.css";

const Discount = () => {
  return (
    <>
    <div className="container Discount px-3 py-5 py-md-0 px-md-5 my-5">
        <div className="row align-items-center">
            <div className="col-md-7">
            <div className="Discount_col1 pt-md-4">
                            <h6 className="Main_Lable pb-3"><i className="fa-solid fa-star"></i>Top products of The Month</h6>
                            <h2>
                                Micropack MHP Headphone Balck

                            </h2>
                            <p className="py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aliquam. Veniam ullam omnis</p>
                            <div className="banner_btns">
                                <button className="main_btn">Shop Now</button>

                            </div>

                        </div>

            </div>
            <div className="col-md-5 pt-5 pt-md-0">
                <img src={img} alt="" className="img-fluid" />
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Discount
