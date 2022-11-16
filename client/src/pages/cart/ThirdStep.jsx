import React from 'react'
import ShippingForm from '../../components/ShippingForm'
import { useSelector } from 'react-redux'
import Header from '../../layout/header'
import { useNavigate } from 'react-router-dom'

const ThirdStep = ({ data, setData, step, setStep }) => {

  const navigate = useNavigate();
  const cart = useSelector((state) => state.persistedReducer.cart.cartItems)
  const total = useSelector((state) => state.persistedReducer.cart.total)
  const description = cart.map(product => product.name).join(', ')

  const goBackward = () => {
    setStep(step - 1)
  }

  const shippingData = data

  return (
    <>
      <Header />
      <div className='max-w-2xl m-auto my-4'>
        <h1 className='text-center text-2xl mb-4'>Review your order</h1>
        <div className={`flex flex-col flex-1 max-w-md sm:max-w-lg m-auto gap-4`}>
          {cart.map((product, index) => {
            return (
              <div key={index} className='flex items-center justify-between h-full w-full'>

                <div className='basis-2/6 relative'>
                  <img src={product.image} className='border-2 border-solid rounded-lg border-gray-200 shadow-sm h-full' />
                  <div className='absolute top-0 -right-2 rounded-lg bg-blue-200' style={{ width: '20px', height: '20px' }}>
                    <p style={{ position: 'absolute', right: '5px', top: '-2px' }}>{product.quantity}</p>
                  </div>
                </div>

                <div className='p-4 flex flex-col'>
                  <p className='font-bold'>{product.name}</p>
                  <p className='text-gray-500 font-medium'>{product.gender}</p>
                </div>
              </div>
            )
          })}
        </div>

        <h1 className='text-center text-2xl mt-8'>Your shipping details</h1>
        <div>
          <ShippingForm data={data} disable />
        </div>

        {/* For third step, buttons are outside of the form as we only need to go back a page or into checkout */}
        <div className='flex flex-col sm:flex-row gap-4 p-4'>
          <button onClick={() => goBackward()} className=" w-full flex justify-center m-auto text-white items-center bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center">
            Go back
          </button>
          {/* <button type='submit' className="w-full flex justify-center m-auto text-white bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center">
            Checkout
          </button> */}
          <button onClick={() => navigate('/checkout', { state: { total, description, shippingData } })}
            type="submit" className=" mb-4 flex m-auto text-white items-center bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center">
            Place order
          </button>
        </div>
      </div>
    </>

  )
}

export default ThirdStep