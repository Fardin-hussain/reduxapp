import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { remove, removeAll } from './store/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productId) => {
        productId ? dispatch(remove(productId)) :  dispatch(removeAll());   
         
    }
  return (
        <>
             <h3>Cart</h3>
             <button type="button" class="btn btn-info" onClick={() => handleRemove()}>Remove All</button>
             <div className='cartdiv'>
                {products.map((product) => (
                    <div className='cartinside mt-2 p-3' style={{display : 'flex', }}>
                        <img src={product.image} />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button type="button" className="btn btn-primary m-2" onClick={() => handleRemove(product.id)}>Remove</button>
                    </div>
                )
                )}
             </div>
        </>
   
  )
}

export default Cart;
