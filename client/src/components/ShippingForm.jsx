import React from 'react'
import { countries } from '../helpers/countries'
import { useFormik } from 'formik'
import { shippingSchema } from '../helpers/yup'

const ShippingForm = ({ data, setData, goBack, goForward, disable, fillShippingInfo }) => {

    const formik = useFormik({
        initialValues: data,
        validationSchema: shippingSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: values => {
            setData(values)
            goForward();
        }
    })

    return (
        <div className="mt-10 sm:mt-0">
            <div className="px-4 py-5 bg-white sm:p-6">

                <form onSubmit={formik.handleSubmit}>
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-3 sm:col-span-3">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
                            <input type="text" value={formik.values.fullName} disabled={disable} placeholder={data.fullName} onChange={formik.handleChange} name="fullName" id="fullName" autoComplete="name" className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md" />
                            {formik.errors.fullName ? <div className='text-red-500'>{formik.errors.fullName}</div> : null}
                        </div>


                        <div className="col-span-3 sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input type="text" value={formik.values.email} placeholder={data.email} onChange={formik.handleChange} disabled={disable} name="email" id="email" autoComplete="email" className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md" />
                            {formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <input type="text" value={formik.values.address} placeholder={data.address} onChange={formik.handleChange} disabled={disable} name="address" id="address" autoComplete="address" className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md" />
                            {formik.errors.address ? <div className='text-red-500'>{formik.errors.address}</div> : null}
                        </div>


                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                            <select id="country" value={formik.values.country} placeholder={data.country} onChange={formik.handleChange} disabled={disable} name="country" autoComplete="country" className="mt-1 block w-full  py-2 px-3 border border-gray-300 bg-white rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                {countries.map((country, index) => {
                                    return (
                                        <option key={index}>{country}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="col-span-6 sm:col-span-2 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" value={formik.values.city} placeholder={data.city} onChange={formik.handleChange} disabled={disable} name="city" id="city" className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md" />
                            {formik.errors.city ? <div className='text-red-500'>{formik.errors.city}</div> : null}

                        </div>


                        <div className="col-span-3 sm:col-span-2 lg:col-span-2">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                            <input type="text" value={formik.values.state} placeholder={data.state} onChange={formik.handleChange} disabled={disable} name="state" id="state" className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md" />
                            {formik.errors.state ? <div className='text-red-500'>{formik.errors.state}</div> : null}
                        </div>


                        <div className="col-span-3 sm:col-span-2 lg:col-span-2">
                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                            <input type="text" value={formik.values.zip} placeholder={data.zip} disabled={disable} onChange={formik.handleChange} name="zip" id="zip" autoComplete="postal-code" className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md" />
                            {formik.errors.zip ? <div className='text-red-500'>{formik.errors.address}</div> : null}
                        </div>

                        {/* Add buttons inside shipping form component for the Formik. */}
                        {fillShippingInfo &&
                            <div className='col-span-6 flex mx-auto gap-4 mt-4 w-full'>
                                <button onClick={() => goBack()} className="w-full justify-center flex m-auto text-white items-center bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center">
                                    Go back
                                </button>
                                <button type='submit' className="w-full justify-center flex m-auto text-white items-center bg-black hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center">
                                    Continue
                                </button>
                            </div>
                        }
                    </div>
                </form>
            </div >

        </div >
    )
}

export default ShippingForm