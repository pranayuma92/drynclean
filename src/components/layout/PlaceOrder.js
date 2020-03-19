import React from 'react';
import { connect } from 'react-redux';
import { resetCart } from '../../store/actions/cartActions'

const PlaceOrder = (props) => {
	const { cart , total} = props;

	return (
		<div className="placeorder-section">
			<div className="order-header">
				<h3>Place order</h3>
				{ cart.length > 0 && <span onClick={() => props.resetCart()} >Clear</span>}
			</div>
			{ cart && cart.map(item => (
				<div key={ item.uid } className="order-item">
				<div>{ item.title }</div> - Rp. { item.price } x{item.quantity}</div>
			))}
			
			<div className="card-footer">
				Total Order - Rp. { total }
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	cart: state.cart,
	total: state.total
})

const mapDispatchToProps = {
	resetCart : resetCart
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceOrder);