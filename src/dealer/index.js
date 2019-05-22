import React,{ Component } from 'react'
import { NavBar, Icon,Popover } from 'antd-mobile';
import { Link } from "react-router-dom";
import ps from "../img/ps.png";
import unselected from "../img/unselected.png";
import real from "../img/real.png";
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from "../util/request"
import './style.scss'
const Item = Popover.Item;
class Dealer extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	    	visible: false,
        	selected: '',
        	animation: []
	    };
	}
	componentDidMount(){
		
	}	
	onSelect = (opt) => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
        if(opt.props.value==1){
            this.props.history.push("/help");
        }
    }
    handleVisibleChange = (visible) => {
        this.setState({
          	visible,
        });
    }
	componentWillMount() { 
		if(this.props.dealerList.dealerList.length==0){
			get("http://localhost:8989/mock/dealer.json").then(data => {
				this.props.setDealerList(data);
	  		});	
	  		console.log("组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。")
		}
    }
    back(){
    	this.props.history.goBack();
    }
    getDealer(item,index){
    	this.props.changeIdx(index);
    	sessionStorage.selectIdx = index;
    	this.props.setDealerName(item.name);
    	this.back();
    }
	render(){
		const { dealerList,selectIdx,total } = this.props.dealerList;
		const liChildren = dealerList.map((item,index) => {
	      	return (<li key={index}  onClick={this.getDealer.bind(this,item,index)}>
	        	<TweenOne className="flex">
		          	<div className="flex">
	    				<img src={ps} alt="" width="80" />
	    			</div>
	    			<div className="flex vertical grow item-content">
						<p className="grow dealer-name">{item.name}</p>
						<p className="grow dealer-addr">{item.addr}</p>
						<p className="grow dealer-star">{item.star}</p>
						<p className="dealer-ratale"><span>{item.ratale}</span></p>
	    			</div>
	    			<div className="flex">
	    				<img src={selectIdx==index?real:unselected} alt="" width="20" />
	    			</div>
	        	</TweenOne>
	      	</li>);
	    });
		return (
			<div className="container page-dealer">
				<NavBar
				className="dealer-header"
			      icon={<Icon type="left" />}
			      onLeftClick={this.back.bind(this)}
			    >经销商</NavBar>
			    <div className="dealer-scroll-wrapper">
			    	<div className="total-dealer">共{total}家门店</div>
			    	<QueueAnim component="ul"
			            animConfig={[
			              	{ opacity: [1, 0], translateY: [0, 30] },
			              	{ height: 0 },
			            ]}
			            ease={['easeOutQuart', 'easeInOutQuart']}
			            interval={300}
			            className="dealer-ul"
		          	>
		            	{liChildren}
		          	</QueueAnim>
			    </div>
			</div>
		)
	}
}
const mapStateToProps = ( state) => {
	console.log(state.dealer)
	return {dealerList:state.dealer};
};
const mapDispatchToProps = (dispatch) => {
	return {
		changeIdx: (idx) => {
			dispatch({
				type : 'CHANGE_IDX',
				idx
			});
		},
		setDealerList:(data)=>{
			dispatch({
				type : 'SET_DEALER_LIST',
				data
			});
		},
		setDealerName:(name) =>{
			dispatch({
				type : 'SET_DEALER_NAME',
				name
			});
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Dealer);
