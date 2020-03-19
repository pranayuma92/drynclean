import React from 'react';

const ServicesTabs = (props) => {
	return (
		<div className="services-tab">
			<div onClick={props.handleTab} className="card" id="laundry-services">
			  	<div className="card-body">
			    	<h3>Laundry Service</h3>
			  	</div>
			</div>
			<div onClick={props.handleTab} className="card" id="dry-cleaning">
			  	<div className="card-body">
			    	<h3>Dry cleaning & ironed laundry</h3>
			  	</div>
			</div>
		</div>
	)
}

export default ServicesTabs;