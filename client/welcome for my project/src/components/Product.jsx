import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";



function Product() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { addToCart, totalPrice, cart } = useCart();
const navigate = useNavigate();


  const pro = { name, price, image, category };

  const fetch = () => {
    axios.get("http://localhost:3000/api/product/getAll")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  const addPro = (newPro) => {
    axios
      .post("http://localhost:3000/api/product/add", newPro)
      .then(() => fetch())
      .catch((err) => console.log(err));
  };

  const delPro = (id) => {
    axios
      .delete(`http://localhost:3000/api/product/${id}`)
      .then(() => fetch())
      .catch((err) => console.log(err));
  };

  const updatePro = (id, newName) => {
    axios
      .put(`http://localhost:3000/api/product/${id}`, newName)
      .then(() => fetch())
      .catch((err) => console.log(err));
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setFilteredData([]);
      return;
    }

    const results = data.filter((el) =>
      el.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setFilteredData(results);
  };



  return (
    <div>
   <div className="navbar">
  <span>My Shop</span>
  <input
    type='text'
    placeholder='Search by name...'
    onChange={(e) => setSearchTerm(e.target.value)}
    value={searchTerm}
    style={{ margin: "0 10px" }}
  />
  <button onClick={handleSearch}>Search</button>
  <button onClick={() => navigate("/panier")} style={{ float: "right", marginLeft: "20px" }}>
    🛒 Cart ({cart.length}) - ${totalPrice.toFixed(2)}
  </button>
</div>


      <div className="cover-image">
        <main className="product-container">
          <h2>Our Products</h2>
 <p style={{ color: '#6d1515', fontWeight: 'bold' }}>
  Welcome to our products page. Here you will find the finest products with the best scents.</p>      
       <button>Shop Now</button>
        </main>
        <h2>DELICIOUS SMELL</h2>
        <input type='text' 
        placeholder='Name'
         value={name}
          onChange={(e) => setName(e.target.value)} 
          />
        <input type='number'
         placeholder='Price'
          value={price}
           onChange={(e) => setPrice(e.target.value)} 
           />
        <input type='text'
         placeholder='Category'
          value={category}
           onChange={(e) => setCategory(e.target.value)}
            />
        <input type='text'
         placeholder='Image URL'
          value={image} 
          onChange={(e) => setImage(e.target.value)}
           />
        <button onClick={() => addPro(pro)}>ADD Product</button>

        <ul>
          {(filteredData.length > 0 ? filteredData : data).map((el) => (
            <li key={el.id}>
              <p>{el.name}</p>
              <p>{el.price}</p>
              <p>{el.category}</p>
              <img src={el.image} alt={el.name} width="100" />

              <button onClick={() => delPro(el.id)}>Delete</button>
           <button onClick={() => addToCart({ name: el.name, price: el.price, image: el.image })}>
  Add to Panier
</button>


              <input type="text"
               placeholder="Name"
                value={name}
                 onChange={(e) => setName(e.target.value)}
                  />
              <input type="number"
               placeholder="Price"
                value={price} 
                onChange={(e) => setPrice(e.target.value)}
                 />
              <input type="text" 
              placeholder="Category"
               value={category}
                onChange={(e) => setCategory(e.target.value)}
                 />
              <input type="text"
               placeholder="Image URL"
                value={image}
                 onChange={(e) => setImage(e.target.value)} 
                 />
              <button onClick={() => updatePro(el.id, pro)}>Update</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Product;
