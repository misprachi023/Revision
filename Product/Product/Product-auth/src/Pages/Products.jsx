import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddToCart } from "../Context/CartContext";

export default function Products() {
  const [productData, setProductData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "blue",
          fontSize: "30px",
          textAlign: "center",
          gridColumn: "1 / -1",
        }}
      >
        Welcome to Products Page
      </h1>
      <input
        style={{
          padding: "8px",
          margin: "10px",
          width: 200,
          gridColumn: "1 / -1",
        }}
        type="text"
        placeholder="Search Product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            style={{
              maxWidth: "100%",
              maxHeight: "150px",
              marginBottom: "5px",
            }}
          />
          <h3 style={{ marginBottom: "5px" }}>{product.title}</h3>
          <h3>{product.category}</h3>
          {/* <div>{product.description}</div> */}
          <h3>INR: {product.price}</h3>
          <hr style={{ margin: "20px auto", width: "80%" }} />
          <div>
            <Link to={`/products/${product.id}`}>
              <button style={{ marginRight: "10px" }}>View Details</button>
            </Link>
            <AddToCart product={product} />
          </div>
        </div>
      ))}
     
    </div>
  );
}
