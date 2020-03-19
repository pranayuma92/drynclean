const initState = {
	cart : []
}

const cartReducer = (state = initState, action) => {
	// switch(action.type){
	// 	case 'ADD_TO_CART':
	// 		const exist = state.map((item) => item.id)

	// 		if(!exist.includes(action.payload.id)){
	// 			return [ 
	// 				...state,
	// 				action.payload
	// 			];
	// 		} else {
	// 			for(let i = 0; i < state.length; i++){
	// 				if(state[i].id == action.payload.id){
	// 					state[i].qty++
	// 				}
	// 			}
	// 		}

	// 	default :
	// 		return state;
	// }

	let cart = state.cart
	let exist;
	let newCart;
	
	switch(action.type){
		case 'ADD_TO_CART':
			
			exist = cart.find(item => item.item.id == action.payload.item.id);

			if(!exist){
				cart.push(action.payload);
				return {
					...state,
					cart: cart
				}
			} else {
				newCart = cart.filter(item => item.item.id != action.payload.item.id);
				exist.qty++;
            	newCart.push(exist);
 
	            return {
	                ...state,
	                cart: newCart
	            };
			}

		case 'INC_QTY' :
			exist = cart.find(item => item.item.id == action.payload.item.id);
			newCart = cart.filter(item => item.item.id != action.payload.item.id);
			exist.qty++;
        	newCart.push(exist);

            return {
                ...state,
                cart: newCart
            };

        case 'DEC_QTY' :
			exist = cart.find(item => item.item.id == action.payload.item.id);
			newCart = cart.filter(item => item.item.id != action.payload.item.id);
			exist.qty--;
        	newCart.push(exist);

            return {
                ...state,
                cart: newCart
            };

		case 'RESET_CART' :
			return {
				cart: []
			}
			
		default:
			return state;
	}

}

export default cartReducer;