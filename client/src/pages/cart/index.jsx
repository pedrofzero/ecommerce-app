import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Checkout from '../checkout'
import ShippingForm from '../../components/ShippingForm'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'

const Cart = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()


  const dispatch = useDispatch();
  const cart = useSelector((state) => state.persistedReducer.cart.cartItems)
  const total = useSelector((state) => state.persistedReducer.cart.total)

  const description = cart.map(product => product.name).join(', ')

  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    fullName: '',
    email: '',
    address: '',
    country: '',
    city: '',
    state: '',
    zip: ''
  })

  switch (step) {
    case 0:
      return <FirstStep step={step} setStep={setStep} />;
    case 1:
      return <SecondStep data={data} setData={setData} step={step} setStep={setStep} />;
    case 2:
      return <ThirdStep data={data} setData={setData} step={step} setStep={setStep} />;
    default:
      return <FirstStep />
  }

}

export default Cart