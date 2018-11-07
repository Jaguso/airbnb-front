
//Estos son los Actions:

//{"start_date": "2018-01-01", "due_date": "2018-01-04"} ésto llega del formulario
export const addDates = dates => ({
    type: "ADD_DATE",
    dates
})


//{price": 1500} ésto llega del formulario
export const addPrice =  price => ({
    type: "ADD_PRICE",
    price
})


//{"paypal_confirmation": "pjfwpeocj"} esto llega del formulario
export const addPaypal = paypal => ({
    type: "ADD_PAYPAL",
    paypal
})