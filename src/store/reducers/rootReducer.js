import laundryReducer from './laundryReducer';
import cartReducer from './cartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	laundry: laundryReducer,
	cart: cartReducer
})

export default rootReducer
