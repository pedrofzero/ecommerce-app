import React from 'react'

const Form = () => {
    return (
        <div className='w-2/4 m-auto pt-4'>
            <form>
                <div class="mb-6">
                    <label htmlFor="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                    <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Your name" required />
                </div>
                <div class="mb-6">
                    <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@email.com" required />
                </div>
                <div class="mb-6">
                    <label htmlFor="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                    <input type="text" id="message" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" required />
                </div>
                <button type="submit" class=" mb-4 flex m-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default Form