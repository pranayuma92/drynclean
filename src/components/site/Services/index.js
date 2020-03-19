import React, { Component } from 'react';
import Tabs from '../../layout/Tabs';
import Laundry from './Laundry';
import DryCleaning from './DryCleaning';
import HomeBedding from './HomeBedding';

class Services extends Component {

	handleTab = (e) => {
		console.log(e.target)
	}

	render(){
		return (
			<div className="container services">
		      <Tabs>
		        <div label="Laundry service">
		         	<Laundry />
		        </div>
		        <div label="Dry cleaning & ironed laundry">
		          	<DryCleaning />
		        </div>
		        <div label="Home & Bedding">
		          	<HomeBedding />
		        </div>
		      </Tabs>
			</div>

		)
	}
}

export default Services;