import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https:/fakestoreapi.com/products');
            const data = await res.json();
            console.log(' data is ', data);
            setProducts(data);

        }
        fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    }
    return (
        <div>

            <div className="container pt-5">
                <div className="row  gy-5 ">
                    {
                        products.map(product => (
                            <div class="card me-5" style={{ width: '18rem' }}>
                                <div className='imgDiv'>
                                <img src={product.image} className="card-img-top" alt="..." />
                                </div>
                                <div class="card-body pt-5">
                                    <h5 class="card-title">{product.category}</h5>
                                    <p class="card-text">{product.description}</p>
                                    <a  class="btn btn-primary" onClick={() => handleAdd(product)}>Go somewhere</a>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>


        </div>
    )
}

export default Product
