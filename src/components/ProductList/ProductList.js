import  {React, useState, useEffect } from 'react';
import  { getproducts }  from '../Auth/ProductAuth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css'

const Products = () => {
    const [productsData, setProductsData] = useState([]);

   const getData = async () =>{
    let data = await getproducts();
    const {products} = data;
    setProductsData(products); 
   }

   useEffect(()=>{
    getData()
   }, [])

    return (
        <div className="container text-center">
            <div className="row equal-height justify-content-center">
                {productsData.map((productData) => (
                    <div className="col-md-5 col-sm-6 mb-5 " key={productData.id}>
                        <div className="card animated-border">
                            <img src={productData.thumbnail} alt="" className="card-img-top" />
                            <div className="card-body justify-content-center">
                            <h3 className="card-title">Title: {productData.title}</h3>
                            <p className="card-text">Description: {productData.description}</p>
                            <p className="card-text">Discount Percentage: {productData.discountPercentage} %</p>
                            <p className="card-text">Price: {productData.price} EGP</p>
                            </div>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;