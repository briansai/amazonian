import React from 'react';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../context/StateProvider';
import Subtotal from '../components/Subtotal';
import { getFirstName } from '../utils/functions';
import './Checkout.css';

function Checkout() {
  const [{ cart, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__cart">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {getFirstName(user?.displayName) || 'Guest'}</h3>
          <h2 className="checkout__title">
            {cart.length ? 'Your Shopping Cart' : 'Your Shopping Cart Is Empty'}
          </h2>
          {cart.map((item, index) => (
            <CheckoutProduct
              key={`${item.id}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="checkout__subtotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
