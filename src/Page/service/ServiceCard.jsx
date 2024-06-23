import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const {_id,img,price,title} = service;
  return (
    <div>
      <div className="card w-96  h-[400px] bg-base-100 shadow-xl ">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title  font-semibold ">{title}</h2>
          <p className="-ml-[86%] text-red-400">${price}</p>
            <Link to={`/checkout ${_id}`} className="flex justify-end">
            <button className="btn btn-primary ">buy now</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
