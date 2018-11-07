
const initalState = {}

//la igualdad de la primer entrada dice que si state viene vacío es igual a initialState, si no, es el valor que traiga
export default function(state=initalState, actions) {

    switch(actions.type){
        case 'ADD_DATE':
            return {...state, ...actions.dates} //regresa un objeto con lo que tenía antes el estado más las fechas

        case 'ADD_PRICE':
            return {...state, ...actions.price}

        case 'ADD_PAYPAL':
            return {...state, ...actions.paypal}

        default:
            return state;
    }
}