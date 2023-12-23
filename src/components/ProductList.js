import axios from "axios";
import { useState, useEffect } from "react";

function ProductList({ onEdit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );

    console.log(`Product ${productId} deleted.`);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <div className="img-container">
                <img src={product.image} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
            </div>
            <div>
              <p>{`Price: $${product.price}`}</p>
              <div className="buttons">
                <button onClick={() => handleDelete(product.id)}>Delete</button>
                <button
                  onClick={() => {
                    onEdit(product);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
