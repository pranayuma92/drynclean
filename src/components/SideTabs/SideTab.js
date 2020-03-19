import React from 'react';

class SideTab extends React.Component {

	state = {
		activeIndex : 0
	}
	
	render(){
		const {group, action } = this.props
		
		return (
			<>
			{ group && group.map((item, index) => (
		      	<div key={index} className={`tab-list-item ${index === this.state.activeIndex ? 'active' : ''}`} 
		      		onClick={(e) => {
		      			action(item.slug, item.name, item.desc)
		      			this.setState({activeIndex: index})
		      		}}>
			        <div className="card-body">
			          {item.name.replace(/&amp;/g, '&') }
			        </div>
			    </div>
	      	)) }
			</>
			
		)
	}
}

export default SideTab