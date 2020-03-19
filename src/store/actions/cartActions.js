const getData = () => {
	return dispatch => {
		dispatch({type: 'REQUEST_DATA_PENDING'})
		fetch('http://127.0.0.1/wpdevel/wp-json/dnc/v1/get-laundry')
		.then(res => res.json())
		.then(res => {
			dispatch({type: 'REQUEST_DATA_SUCCESS', data: res})
		})
		.catch(error => {
			console.log(error)
			dispatch({type: 'REQUEST_DATA_ERROR'})
		})
	}
}

const getGroup = callback => {
	return dispatch => {
		dispatch({type: 'REQUEST_DATA_PENDING'})
		fetch('http://127.0.0.1/wpdevel/wp-json/dnc/v1/get-laundry-group')
		.then(res => res.json())
		.then(res => {
			dispatch({type: 'REQUEST_GROUP_DATA_SUCCESS', group: res})
		})
		.then(() => {
			callback()
		})
		.catch(error => {
			console.log(error)
			dispatch({type: 'REQUEST_DATA_ERROR'})
		})
	} 
}

const addToCart = (item) => {
	return {
		type: 'ADD_TO_CART',
		item
	}
}

const incQuantity = (id) => {
	return {
		type: 'INC_QUANTITY',
		id
	}
}

const decQuantity = (id) => {
	return {
		type: 'DEC_QUANTITY',
		id
	}
}

const removeItem=(id)=>{
    return{
        type: 'REMOVE_ITEM',
        id
    }
}

const resetCart = () => {
	return { type: 'RESET_CART'}
}

export { addToCart, resetCart, incQuantity, decQuantity, removeItem, getData, getGroup }