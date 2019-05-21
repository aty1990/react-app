import React,{ Component } from 'react'
import { Button } from 'antd-mobile';
import { Link } from "react-router-dom";

class Login extends Component{
	componentDidMount(){
		console.log("组件渲染之后调用，只调用一次。")
	}	
	componentWillMount() { 
        
        console.log("组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。")
    }
    back(){
    	this.props.history.goBack();
    }
	render(){
		return (
			<div className="container">
				<Link to="/home">home</Link>
				<Button type="primary" onClick={this.back.bind(this)}>返回</Button>
			</div>
		)
	}
}
export default Login