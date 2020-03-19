import React from 'react';

class SideScreen extends React.Component {

	render(){
		const { data, label, desc, handleAdd } = this.props
		
		return (
			<>
			<h3>{label && label.replace(/&amp;/g, '&') }</h3>
			<p>{desc && desc.replace(/&amp;/g, '&') }</p>
			<div className="navscreens-detail">
				{ data && data.map(item => (
					<div key={item.id}>
						<div className="navscreens-item">
							<img src={item.img}/>
						 		<ul>
							 	{ item.items.laundry_items.map((child, index) => (
							 			<li key={index} className="pricetag">
							 				<span>{child.title}</span>
							 				<span>Rp. {child.price}</span>
							 				<span onClick={ () => handleAdd(child) } className="btn-inc-qty"></span>
							 			</li>
							 	)) }
						 		</ul>
						</div>
					</div>
				)) }
			</div>
			</>
		)
	}

}

export default SideScreen;