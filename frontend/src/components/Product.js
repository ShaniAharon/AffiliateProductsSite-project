import React from "react";
// import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;
  return (
    <div>
      <div key={product._id} className="card">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            product.link.length > 4 ? product.link : `/product/${product.link}`
          }
        >
          {" "}
          {/*{`/product/${product._id}`}  -> if want to link to productScreen*/}
          <img className="meduim" src={product.image} alt={product.name} />
        </a>
        <div className="card-body">
          <a href={`/product/${product.link}`}>
            <h2>{product.name}</h2>
          </a>
          {/* <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <div className="price">${product.price}</div> */}
        </div>
      </div>
    </div>
  );
}
