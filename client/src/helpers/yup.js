import * as yup from 'yup'
import { countries } from './countries'

export const shippingSchema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    address: yup.string().required().min(10),
    country: yup.string().required().oneOf(countries),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required().matches(/^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/, 'You must enter a valid zip-code')
})

// export const test = shippingSchema.validate({
//     fullName: 'yes',
//     email: 'yessgmail.com',
//     address: '1231321321321',
//     country: 'Portugal',
//     city: 'Pereo',
//     state: 'asdpsada',
//     zip: '5050-270'
// })