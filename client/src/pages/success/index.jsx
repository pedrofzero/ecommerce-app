import React, { useEffect, useState } from 'react'
import Header from '../../layout/header'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { wipeCart } from '../../redux/cartSlice'

const Success = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const params = new URLSearchParams(window.location.search)
    const paymentIntent = params.get("payment_intent")

    const [paymentData, setPaymentData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkPayment = async () => {
            await axios.post(`${import.meta.env.VITE_URL_PATH}/api/checkout/verify-payment`, {
                paymentIntent: paymentIntent
            }).then(res => {
                setPaymentData(res.data.shipping)
                dispatch(wipeCart())
                setLoading(false)

                console.log(paymentData);
            }).catch(err => {
                navigate('/', { replace: true })
                return;
            })
        }
        checkPayment();
    }, [])


    if (paymentData) {
        return (
            <div>
                {loading ?
                    <div className='absolute inset-1/2'>
                        <Spinner />
                    </div>
                    :
                    <div>
                        <Header />
                        <div className='flex flex-col max-w-md m-auto gap-32 mt-12 justify-center text-center'>
                            <h1 className='text-4xl'>Congrats on your purchase, {paymentData.name}! <span className='text-5xl'>🥳</span></h1>
                            <div>
                                <h1 className='text-2xl'>A receipt e-mail will be sent to you very shortly. Thanks for buying with us!</h1>
                                <button type='submit' onClick={() => navigate('/')} className="w-1/2 mt-4 justify-center flex m-auto text-white items-center bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center">
                                    Go home
                                </button>
                            </div>

                        </div>
                    </div>
                }
            </div>
        )
    } else {
        navigate('/')
    }

}

export default Success