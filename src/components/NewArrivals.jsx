import React from "react";
import {Link} from "react-router-dom"
import '../components/NewArrivals'
import ProductData from "../pages/ProductData";
import './CSS/NewArrivals.css'


function NewArrivals() {
  return (
    <div className="container">
      {ProductData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.Image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{card.name}</h5>
           <Link to={`/list/${card.name}`}>
            <button className="addToCartBttn">
              Add To Cart
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewArrivals;


