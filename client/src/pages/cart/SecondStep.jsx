import React, { useState } from 'react'
import ShippingForm from '../../components/ShippingForm'
import { shippingSchema } from '../../helpers/yup'
import Header from '../../layout/header'

const SecondStep = ({ data, setData, step, setStep }) => {

  const goForward = () => {
    setStep(step + 1)
  }

  const goBackward = () => {
    setStep(0)
  }

  const [error, setError] = useState('')

  return (
    <>
      <Header />
      <div className='max-w-2xl m-auto my-4'>
        <div className='flex flex-col'>
          <h1 className='text-center text-3xl'>Fill your shipping details</h1>
          <ShippingForm data={data} setData={setData} goBack={goBackward} goForward={goForward} fillShippingInfo={true} />
        </div>
      </div>
    </>
  )

}

export default SecondStep