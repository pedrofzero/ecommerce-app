import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../../components/CheckoutForm';

const Checkout = () => {

  const location = useLocation()
  const [clientSecret, setClientSecret] = useState("");

  const [loading, setLoading] = useState(true)

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const handlePayment = async () => {
      axios.post(`${import.meta.env.VITE_URL_PATH}/api/checkout/create-payment-intent`, {
        total: location.state.total * 100,
        description: location.state.description
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