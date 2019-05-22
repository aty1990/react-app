import React,{ Component } from 'react'

class About extends Component{
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
				about.page
			</div>
		)
	}
}
export default About