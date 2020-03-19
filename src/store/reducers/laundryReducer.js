const initState = {
	pending: false,
	error: false,
	cart : [],
	data: [],
	group: [],
	total: 0
}

const laundryReducer = (state = initState, action) => {
	
	switch(action.type){
		case 'REQUEST_DATA_PENDING' :
			return {
				...state,
				pending: true
			}

		case 'REQUEST_DATA_SUCCESS' :
			return {
				...state,
				data: action.data,
				pending: false
			}

		case 'REQUEST_GROUP_DATA_SUCCESS' :
			return {
				...state,
				group: action.group,
				pending: false
			}

		case 'REQUEST_DATA_ERROR' :
			return {
				...state,
				pending: false,
				error: true
			}

		case 'ADD_TO_CART':	
	        let existed_item = state.cart.find(item=> action.item.uid === item.uid)
	        if(existed_item){
	            action.item.quantity += 1 
	            return{
	                ...state,
	                total: state.total + parseInt(action.item.price)
	            }
	        } else {
	            action.item.quantity = 1;
	            return{
	                ...state,
	                cart: [...state.cart, action.item],
	                total : state.total + parseInt(action.item.price)
	            }    
	        }

		// case 'INC_QUANTITY' :
		// 	addedItem = state.products.find(item=> item.id === action.id)
  //         	addedItem.quantity += 1 
  //         	newTotal = state.total + addedItem.price
  //         	return{
  //             	...state,
  //             	total: newTotal
  //         	}

  //       case 'DEC_QUANTITY' :
		// 	addedItem = state.products.find(item=> item.id === action.id) 
  //       	//if the qt == 0 then it should be removed
	 //        if(addedItem.quantity === 1){
	 //            new_items = state.cart.filter(item=>item.id !== action.id)
	 //            newTotal = state.total - addedItem.price
	 //            return{
	 //                ...state,
	 //                addedItems: new_items,
	 //                total: newTotal
	 //            }
	 //        }
	 //        else {
	 //            addedItem.quantity -= 1
	 //            newTotal = state.total - addedItem.price
	 //            return{
	 //                ...state,
	 //                total: newTotal
	 //            }
	 //        }

	 //    case 'REMOVE_ITEM' :
	 //    	let itemToRemove= state.cart.find(item=> action.id === item.id)
	 //        new_items = state.cart.filter(item=> action.id !== item.id)
	        
	 //        //calculating the total
	 //        newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
	 //        console.log(itemToRemove)
	 //        return{
	 //            ...state,
	 //            cart: new_items,
	 //            total: newTotal
	 //        } 

		case 'RESET_CART' :
			return {
				...state,
				cart: [],
				total: 0
			}
			
		default:
			return state;
	}
}

export default laundryReducer;