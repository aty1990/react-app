import React,{ Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import svg from '../img/210.png';
import car2 from '../img/car2.png';
import ar from '../img/AR.png';
import leftIcon from '../img/selectLeft.png';
import './style.scss';
import Scroll from 'react-bscroll'
import 'react-bscroll/lib/react-scroll.css'
import { connect } from 'react-redux';

class CarList extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	    	curIdx:0
	    };
	}
	componentDidMount(){
		console.log("组件渲染之后调用，只调用一次。")
	}	
	componentWillMount() { 
        
        console.log("组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。")
    }
    back(){
    	this.props.history.goBack();
    }
    goCarConfig(idx,item){
    	this.setState({
    		curIdx : idx
    	})
    	setTimeout(()=>{
    		this.props.history.push( { pathname:'/options',search:'?totalPrice='+item.totalPrice+"&spuName="+item.spuName})

    	},200)
    }
	render(){
		const { curIdx } = this.state;
		const { carlist } = this.props;
		return (
			<div className="container">
				<Scroll 
					click ={ true }>
					<div className="content-wrapper">
						<div className="header-nav">
							<span className="back-icon" onClick={this.back.bind(this)}><Icon type='left'/></span>
							<span className="menu-icon" onClick={this.back.bind(this)}><Icon type='ellipsis'/></span>
						</div>
						<img src={svg} alt="" width="100%"/>
						<span  className="ar"><img src={ar} alt="" width="40"/></span>
						<span className="car-icon"><img src={car2} alt="" width="100%"/></span>
						<div className="mg-26"><img src={leftIcon} alt="" width="135"/></div>
						<div className="carlist-wrapper">
							<ul>
								{
									carlist.map((item,index)=>{
										return (
											<li key={index} className={["car-item",curIdx===index?"active":null].join(' ')}  onClick={this.goCarConfig.bind(this,index,item)}>
												<div className="item-box">
													<span className="car-name grow">{item.spuName}</span>
													<span className="gray-text">综合补贴后价格</span>
												</div>
												<div className="item-box">
													<span className="grow gray-text">指导价:¥{item.zdj}</span>
													<span className="total-price">￥{item.totalPrice}</span>
												</div>
											</li>
										)
									})
								}
							</ul>
						</div>
					</div>
				</Scroll>
			</div>
		)
	}
}
const mapStateToProps = (carlistData = []) => {
	return {carlist:carlistData.carlist};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAdd: (text) => {
			dispatch({
				type:'ADD_TODO',
				classId:text.classId,
				img:text.img
			});
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CarList);
