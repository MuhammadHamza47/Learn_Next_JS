"use client";


import { useEffect, useState } from 'react';
export default function Home() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchProducts = async ()=>{
    let products = await fetch('https://fakestoreapi.com/products');
    products = await products.json();
    setProducts(products);
    console.log(products);
    setLoading(false);
  }

  useEffect(() =>{
    fetchProducts();
  },[])

  return(
    <div>
      <h1>Products</h1>
      {/* <button onClick={fetchProducts}>Fetch Products</button> */}

      {products.length ?

      <table>
          <tr>
            <th>id</th>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>category</th>
            <th>description</th>
          </tr>

          {
            products.map((product, i)=>{
              return(
                <tr key={i}>
                  <td>{product.id}</td>
                  <td><img src={product.image} width="50" /></td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.description.slice(0,20)}...</td>
                </tr>
              )
            })
          }
      </table>:
      loading ? <div class="loader"></div> :
      <p>No Products</p>
      }
    </div>
  );
}
