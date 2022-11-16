import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../../components/CheckoutForm';

const Checkout = () => {

  const location = useLocation()

  const cart = useSelector((state) => state.persistedReducer.cart.cartItems)

  const [clientSecret, setClientSecret] = useState("");
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  const shippingData = location.state.shippingData
  console.log(shippingData)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const handlePayment = async () => {
      await axios.post(`${import.meta.env.VITE_URL_PATH}/api/checkout/create-payment-intent`, {
        total: location.state.total * 100,
        description: location.state.description,
        shipping: {
          name: shippingData.fullName,
          address: {
            city: shippingData.city,
            line1: shippingData.address,
            postal_code: shippingData.zip,
            state: shippingData.state
          }
        }
        
      })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          // setLoading(false)
        })
    }

    handlePayment()
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret &&
        <div className='max-w-lg m-auto p-4'>
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      }
    </div>
  )
}

export default Checkout