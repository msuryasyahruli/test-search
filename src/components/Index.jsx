import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const fetchData = (value) => {
    fetch("https://blanja-backend-v2.vercel.app/products")
      .then((response) => response.json())
      .then((json) => {
        const result = json.data.filter((product) => {
          return (
            product &&
            product.product_name &&
            product.product_name.toLowerCase().includes(value)
          );
        });
        setResult(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="container">
      <div className="searchBar">
        <input
          className="inputSearch"
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      {input === "" ? (
        ""
      ) : (
        <div className="searchResult">
          {result.map((result, id) => (
            <button className="btnResult" key={id}>
              {result.product_name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
