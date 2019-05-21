import QueueAnim from 'rc-queue-anim';
import React,{ Component } from 'react' 
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import { NavBar,Icon } from 'antd-mobile';
import './style.scss';

class ListDemo extends Component {
  	static propTypes = {
    	className: PropTypes.string,
  	};
  	static defaultProps = {
    	className: 'queue-demo',
  	};
  	constructor(props) {
	    super(props);
	    this.openIndex = null;
	    this.position = {};
	    this.state = {
	      	dataArray: [
		        {
		          	img: 'https://zos.alipayobjects.com/rmsportal/riaksOILvYdFRfa.png',
		          	text: 'Senior Product Designer',
		          	key: 0,
		        },
		        {
		          	img: 'https://zos.alipayobjects.com/rmsportal/EMQSSlFQtGYEnWx.png',
		          	text: 'Senior Product Designer',
		          	key: 1,
		        },
		        {
		          	img: 'https://zos.alipayobjects.com/rmsportal/OCuGZXfRioLyhKF.png',
		          	text: 'Senior Product Designer',
		          	key: 2,
		        },
		        {
		          	img: 'https://zos.alipayobjects.com/rmsportal/agzYYwzggpOjqge.png',
		          	text: 'Senior Product Designer',
		          	key: 3,
		        },
	      	],
	      	animation: [],
	      	style: []
	    };
  	}
  	back(){
		this.props.history.goBack();
	}
  	render() {
	    const liChildren = this.state.dataArray.map((item) => {
	      	const { img, text, key } = item;
	      	return (<li key={key}>
	        	<TweenOne className={`${this.props.className}-content`} animation={this.state.animation[key]}
	          		style={this.state.style[key]}>
		          	<div className={`${this.props.className}-img`}>
		            	<img src={img} width="44" height="44" onDragStart={e => e.preventDefault()} />
		          	</div>
		          	<p>{text}</p>
	        	</TweenOne>
	      	</li>);
	    });
    	return (<div className="container page-help">
	    	<NavBar
			className="dealer-header"
		      icon={<Icon type="left" />}
		      onLeftClick={this.back.bind(this)}
		    >帮助文档</NavBar>
	      	<div className={`${this.props.className}-wrapper`}>
		        <div className={this.props.className}>
		          	<QueueAnim component="ul"
			            animConfig={[
			              	{ opacity: [1, 0], translateY: [0, 30] },
			              	{ height: 0 },
			            ]}
			            ease={['easeOutQuart', 'easeInOutQuart']}
			            duration={[550, 450]}
			            interval={150}
		          	>
		            	{liChildren}
		          	</QueueAnim>
		        </div>
	      	</div>
    	</div>);
  	}
}

export default ListDemo