import React from 'react';
import { connect } from 'react-redux';
import SideTab from './SideTab';
import SideScreen from './SideScreen';
import { getData, getGroup, addToCart } from '../../store/actions/cartActions';
import PlaceOrder from '../layout/PlaceOrder';

class SideTabs extends React.Component {

	state = {
		laundry : '',
		label: '',
		desc: ''
	}

	componentDidMount(){
		this.props.getData()
		this.props.getGroup(() => {
			let init = this.props.group[0]
			this.changeIndex(init.slug, init.name, init.desc)
		})
	}

	changeIndex = (index, label, desc) => {
		this.setState({
			laundry: index,
			label,
			desc
		})
	}

	handleAdd = (id) => {
		this.props.addToCart(id)
	}

	render(){
		// console.log(this.props)
		const { pending, error } = this.props

		if(pending === true) return (<div>Loading</div>);

		if(error === true) return (<div>error</div>);

		const { data,group } = this.props
		const datas = data[this.state.laundry];

		return (
			<div className="services">
		        <div className="services-tab">
		          <div className="navtabs">
		          	<SideTab group={group} action={this.changeIndex} />
		          </div>
		        
		          <div className="navscreens">
		          	<SideScreen 
		          		data={datas} 
		          		label={this.state.label} 
		          		desc={this.state.desc} 
		          		handleAdd={this.handleAdd} />
		           </div>
		          <div className="navplaceorder">
		          	<PlaceOrder />
		          </div>
		        </div>
		    </div>
		)
	}
}

const mapStateToProps = state => ({
	data: state.data,
	group: state.group,
	pending: state.pending,
	error: state.error
})

const mapDispatchToProps = dispacth => ({
	getData: () => dispacth(getData()),
	getGroup: (callback) => dispacth(getGroup(callback)),
	addToCart: (id) => dispacth(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideTabs);