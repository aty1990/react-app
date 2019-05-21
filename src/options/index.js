import React,{ Component } from 'react'
import { NavBar, Icon,Flex,Popover } from 'antd-mobile';
import Rotation from 'react-rotation'
import { blueIcon,redIcon } from './carIcon'
import cleft from '../img/cleft.png';
import _360 from '../img/360.png';
import viewer from '../img/viewer.jpg';
import './style.scss'

const url = require('url');

const Item = Popover.Item;

class Options extends Component{
	constructor(props){
	    super(props);
	    this.state = {
	    	colorText:['玛瑙红','极光蓝'],
	    	tabIdx : 0,
	    	selectId:0,
	    	colorArr:[
			  	"https://cmsqa-oss.sgmlink.com/5a4d95a9fe736/582c67a6-ce96-41a3-807e-8b76f8d9958f.jpg",
			  	"https://cmsqa-oss.sgmlink.com/5a4d95a9fe736/48b2e151-12ef-478b-a3f7-4c1e207ae723.jpg"
			],
	    	iconList :redIcon,
	    	visible: false,
        	selected: ''
	    };
	    this.viewer = null;
	}
	componentDidMount(){

	}	
	componentWillMount() { 
        
        console.log("组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。")
    }
    back(){
    	if(this.state.tabIdx==1){
    		this.setState({
	          	tabIdx : 0
	        });
    	}else{
    		this.props.history.goBack();
    	}
    }
    changeCarModel(index){
    	this.setState({
    		iconList : index==0?redIcon:blueIcon,
    		selectId : index
    	})
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
    changeTab(tabIdx){
    	this.setState({
          tabIdx
        });
    	if(this.state.tabIdx==0){
    		if(!this.viewer){
	    		this.viewer = window.pannellum.viewer('panorama', {
				    "type": "equirectangular",
				    "autoLoad": true,
				    "showControls": false,
				    "panorama": [viewer]
				});		
    		}else{
    			console.log("1221");
    		}
    	}
    }
    nextStep(){
    	if(this.state.tabIdx==0){
    		this.setState({
	          	tabIdx : 1
	        });
    		if(!this.viewer){
	    		this.viewer = window.pannellum.viewer('panorama', {
				    "type": "equirectangular",
				    "autoLoad": true,
				    "showControls": false,
				    "panorama": [viewer]
				});		
    		}
    	}else{
    		alert("ok");
    	}
    }
	render(){
		var params = url.parse(this.props.location.search, true).query;
		const item = this.props.location.item;
		const { iconList,colorArr,colorText,selectId,tabIdx } = this.state;
		const options = {
			autoPlay : true,
			cycle:true
		}
		return (
			<div className="container options-page">
				<img src={cleft} width="26px" className="fixed-icon" />
				<NavBar
			      mode="dark"
			      icon={<Icon type="left" />}
			      onLeftClick={this.back.bind(this)}
			      rightContent={
			      	<Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={[
                          (<Item key="1" value="1">帮助文档</Item>),
                          (<Item key="2" value="2" >隐私政策</Item>),
                        ]}
                        align={{
                          overflow: { adjustY: 0, adjustX: 0 },
                          offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                      >
                        <div style={{
                          height: '100%',
                          padding: '0 15px',
                          marginRight: '-15px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        >
                          <Icon type="ellipsis" />
                        </div>
                  </Popover>
			      }
			    >{params.spuName}</NavBar>
			    <div>
			    	<div className="flex text-left opt-tabs">
			    		<span className={["items",tabIdx===0?"on":null].join(' ')}  onClick={this.changeTab.bind(this,0)}>颜色</span>
			    		<span className={["items",tabIdx===1?"on":null].join(' ')} onClick={this.changeTab.bind(this,1)}>内饰</span>
			    	</div>
					<div className="tab-color" style={{display: (0===tabIdx) ? "block" : "none"}}>
				    	<div>
				    		<Rotation {...options}>
								{
									iconList.map((item,index)=>{
										return (
											<img key={index} src={item.imgUrl} alt="" width="100%"/>
										)
									})
								}
							</Rotation>
							<div className="flex icon-360"><img src={ _360 } height="26px"/></div>
				    	</div>
				    	<Flex><Flex.Item>{colorText[selectId]}</Flex.Item></Flex>
				    	<Flex className="selected"><Flex.Item className="gray-text">已选</Flex.Item></Flex>
						<div className="color-item-wrapper">
							<Flex>
								{
									colorArr.map((item,index)=>{
										return (
											<Flex.Item key={index}><span onClick={this.changeCarModel.bind(this,index)}><img src={item} alt="" width="40"/></span></Flex.Item>
										)
									})
								}
							</Flex>
							<Flex className="gray-text-wrapper"><Flex.Item className="gray-text">车身色彩以实车为准</Flex.Item></Flex>
						</div>
			    	</div>
			    	<div style={{display: (1===tabIdx) ? "block" : "none"}}>
						<div id="panorama"></div>
						<div className="flex color-desc-wrapper">
							<div className="flex color-desc">深空灰</div>
						</div>
						<div className="color-item-wrapper">
							<Flex>
								<Flex.Item><span onClick={this.changeCarModel.bind(this,0)}><img src="https://cmsqa-oss.sgmlink.com/5a4d95a9fe736/010f7c17-0556-4805-93c7-cd2b4a71c905.jpg" alt="" width="40"/></span></Flex.Item>
							</Flex>
							<Flex className="gray-text-wrapper"><Flex.Item className="gray-text">内饰颜色以实车为准</Flex.Item></Flex>
						</div>
			    	</div>
			    </div>
			    <div className="options-page-footer">
			    	<div className="flex grow  vertical price-left-wrapper">
			    		<p className="flex text-left price">总价</p>
			    		<p className="flex text-left price-desc">￥{params?params.totalPrice:"210,000"}起</p>
			    	</div>
			    	<div className="flex next-btn" onClick={this.nextStep.bind(this)}>{tabIdx==0?"选择内饰":"确认"}</div>
			    </div>
			</div>
		)
	}
}
export default Options