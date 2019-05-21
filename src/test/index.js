import React,{ Component } from 'react'
import { NavBar, Icon,Button,List,Picker,Toast } from 'antd-mobile';
import { Link } from "react-router-dom";
import { createForm } from 'rc-form';
import car from '../img/car.png';
import { connect } from 'react-redux';
import "./style.scss";

import { district, provinceLite } from 'antd-mobile-demo-data';

const Item = List.Item;
const Brief = Item.Brief;
class Test extends Component{
	constructor(props) {
	    super(props);
	    this.state = {};
	    this.eventEmitter = null;
  	}
	omponentDidMount() {
        
    }	
    componentWillUnmount() {

    }
	componentWillMount() { 
        console.log("组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。")
    }
    back(){
    	this.props.history.goBack();
    }
    chooseDealer(){
    	this.props.history.push("/dealer");
    }
    help(){
    	this.props.history.push("/help");
    }
    getResult(v){
    	this.props.setCityCode(v[2])
    }
    setText(v){
    	return v[2];
    }
    submit(){
    	Toast.success('预约成功', 1, () => {
		    this.back();
		});
    	//alert(this.props.test.dealerName)
    }	
	render(){
		const { getFieldProps } = this.props.form;

		const { userName,phone,cityName,dealerName} = this.props.test;
		return (
			<div className="container page-test">
				<div className="header-nav">
					<span className="back-icon" onClick={this.back.bind(this)}><Icon type='left'/></span>
					<span className="header-title">预约试驾</span>
					<span className="menu-icon" onClick={this.help.bind(this)}><Icon type='ellipsis'/></span>
				</div>
				<div className="default-img"><img src={car} alt="" width="100%"/></div>
				<div>
					<List renderHeader={() => '预约试驾'} className="my-list">
			        	<Item extra={userName}>真实姓名</Item>
			        	<Item extra={phone}>联系电话</Item>
			        	<Picker extra={cityName}
				          	data={district}
				          	title="上牌城市"
				          	{...getFieldProps('district', {
				            	initialValue: [],
				          	})}
				          	onOk={this.getResult.bind(this)}
				          	format={this.setText.bind(this)}
				          	onDismiss={e => console.log("cancel")}
				        >
				          	<List.Item arrow="horizontal">城市</List.Item>
				        </Picker>
			        	<Item extra={dealerName} arrow="horizontal" onClick={this.chooseDealer.bind(this)}>购车经销商</Item>
			      	</List>

			      	<div className="commit-btn-wrapper">
			      		<Button type={(!userName || !phone || dealerName=="请选择")?"default":"primary"} disabled={!userName || !phone || dealerName=="请选择"} onClick={this.submit.bind(this)}>确认提交</Button>
			      	</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps = (testState = []) => {
	return {test:testState.test};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setDealerName: (dealerName) => {
			dispatch({
				type:'SET_DEALER_NAME',
				dealerName:dealerName
			});
		},
		setCityCode: ( cityCode ) => {
			dispatch({
				type:'SET_CITY_CODE',
				cityCode:cityCode
			});
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(createForm()(Test));