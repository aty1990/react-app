import React,{ Component } from 'react'
// import { Button } from 'antd-mobile';
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
import { connect } from 'react-redux'; 
import { bindActionCreators } from "redux";
import { get } from "../util/request"

import { getIconList,actions as homeAction } from '../redux/modules/home'; 

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import "./style.scss";

class Home extends Component{
	constructor(props){
	    super(props);
	    this.state = {};
	    this.swiperObj = null;
	}
	componentDidMount(){
		
	}	
	componentWillMount() { 
		get("http://localhost:8989/mock/home.json").then(data => {
			this.props.setData(data);
  		}).then(()=>{
  			this.swiperObj = new Swiper('.swiper-container', {
		       slidesPerView : 1,
		       direction : 'vertical'
		    });
  		})
        console.log("组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。")
    }
	gotoCarList(path){
		this.props.history.push(path);
		// this.props.onAdd({classId:"5",img:"https://cms.sgmlink.com/ibuick/cdn/oss/1342/6.jpg"});
		// setTimeout(()=>{
		// 	this.swiperObj.update()
		// },500)
	}
	gotoTestPage(path){
		this.props.history.push(path);
	}
	render(){
		console.log(this.props);
		const list = this.props.home;
		return (
			<div className="container">
		        <div className='swiper-container'>
			        <div className='swiper-wrapper'>
			            {
			                list.map((item,index)=>{   // this.state.bag是在state里面定义的数组为了循环数据
			                    return(                                    
			                        <div key={index} ref="myli" className="swiper-slide">
				                        <img src={item.img} className="slilde-img" alt=''></img>
			                        </div>
			                    )
			                })
			            }
			        </div>
			    </div>
			    <div className="footer">
			    	<div className="left-opts" onClick={this.gotoTestPage.bind(this,'/test')}>试乘试驾</div>	
			    	<div className="right-opts" onClick={this.gotoCarList.bind(this,'/carlist')}>立即购买</div>	
			    </div>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => {
  	return {
		home:state.home,
		iconList:getIconList(state)
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		setData:(iconList) => {
			dispatch({
				type:'SET_DATA',
				iconList
			});
		},
		onAdd: (text) => {
			dispatch({
				type:'ADD_TODO',
				classId:text.classId,
				img:text.img
			});
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);