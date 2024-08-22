import "./SingleProducts.css";
import img1 from "../../assets/headphone_21.png";
// import useFetch from "../../hooks/useFetch";
// import { NavLink, useParams } from "react-router-dom";
// import { useContext, useState } from "react";
// import { Context } from "../../utils/context";
// import RelatedProducts from "./RelatedProducts/RelatedProducts";

const SingleProducts = () => {
// const [quantity, setQuantity] = useState(1);
//   const { id } = useParams();
//   const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

//   const { handleAddToCart } = useContext(Context);

//   const products = data?.data?.[0]?.attributes;

//   const increment = () => {
//     setQuantity((prevState) => prevState + 1);
//   };
//   const Decrement = () => {
//     setQuantity((prevState) => {
//       if (prevState === 1) return 1;
//       return prevState - 1;
//     });

//   };
  return (
   <>
   <div className="container gx-0 py-4 single_Product_main">
        <div className="category-title ">
          {/* <NavLink to="/">
            <h2>Home</h2>
          </NavLink>{" "} */}
          {/* <span className="px-2">/</span>
          {
            data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
              ?.title
          } */}
        </div>
        <div className="row gx-0 py-2 align-items-center">
          <div className="col-md-6">
            <div className="single_Product1">
                <img src={img1} alt="" className="img-fluid" />
              {/* <img
                src={
                  "http://localhost:1337" + products?.img?.data?.attributes?.url
                }
                alt=""
                className="img-fluid"
              /> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="single_Product2">
              <h2 className="single_Product-title">HeadPhones</h2>
              <h3 className="single_Product-price">$ 50</h3>
              <p className="single_Product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, veritatis! Repudiandae quisquam voluptate modi sequi!
                
              </p>
              <div className="carts-button">
                <div className="quality-buttons my-4 py-3">
                  <span className="single-span">
                    -
                  </span>
                  spsda
                  <span className="single-span">
                    +
                  </span>
                </div>
                <button
                  className="btn3 py-3">
                  <i className="fa-solid fa-cart-shopping pe-2 fs-5"></i> ADD TO
                  CART
                </button>
                <hr />
                <div className="single-category py-2">
                  <span className="fw-bold fs-6">Category :</span>
                </div>
                <span className="ps-1">dbc</span>
                <span className="fw-bold fs-6">Brand :  </span>
                {/* *********************** */}
                <div className="single-social py-2">
                  <span className="fw-bold fs-6">Share : </span>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
                {/* *********************** */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ******************* */}
      {/* <RelatedProducts
        productId={id}
        categoryId={products?.categories?.data?.[0]?.id}
      /> */}
   </>
  )
}

export default SingleProducts
