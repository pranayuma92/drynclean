import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../store/actions/cartActions'

const Laundry = (props) => {
	const { laundry } = props;
	console.log(props)
	return (
		<div className="">
			<div className="">
				<h3>Laundry service</h3>
				<p>This is for your everyday laundry. Items are washed at 30°C and tumble dried.</p>
				<div className="row">
					{ laundry && laundry.map((item) => (
						<div className="col-md-6" key={item.id}>
							<div className="card">
								<div className="card-body">
									{item.name}
								</div>
								<div className="card-footer">
									{item.desc} - Rp. {item.price} <span onClick={ () => props.addToCart(item.id) } className="btn-inc-qty"></span>
								</div>
							</div>
						</div>
					)) }
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	laundry : state.products	
})

const mapDispatchToProps = {
	addToCart : addToCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Laundry);