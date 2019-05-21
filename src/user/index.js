import React,{ Component } from 'react';
import { List, InputItem,WhiteSpace,NavBar, Icon,Popover } from 'antd-mobile';
import { createForm } from 'rc-form';
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let moneyKeyboardWrapProps;
if (isIPhone) {
    moneyKeyboardWrapProps = {
        onTouchStart: e => e.preventDefault(),
    };
}
const Item = Popover.Item;
class User extends Component{
    state = {
        type: 'money',
        name:'1212',
        cardNo:"6224 8732 1354 7973",
        visible: false,
        selected: ''
    }
    aaaa(){
    }
    handleClick = () => {
        this.inputRef.focus();
    }
    getNumber(v){
        this.setState({
            name : v
        })
        console.log(v);
    }
    changeCardNo(v){
        this.setState({
            cardNo : v
        })
        console.log(v);
    }
    back(){
        this.props.history.goBack();
    }
    onSelect = (opt) => {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
        if(opt.props.value==1){
            this.props.history.push("/help");
        }
    };
    handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
    };
    render(){
        const { getFieldProps } = this.props.form;
        const { type } = this.state;
        return (
            <div className="container">
              <NavBar
                mode="light"
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
                >用户信息</NavBar>
                <List>
                  <InputItem
                    type={type}
                    placeholder="start from left"
                    value={this.state.name}
                    clear
                    moneyKeyboardAlign="left"
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                     onChange={this.getNumber.bind(this)}
                  >光标在左</InputItem>
                  <InputItem
                    type={type}
                    placeholder="start from right"
                    clear
                    onChange={(v) => { console.log('onChange', v); }}
                    onBlur={(v) => { console.log('onBlur', v); }}
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                  >光标在右</InputItem>
                  <InputItem
                    {...getFieldProps('money2', {
                      normalize: (v, prev) => {
                        if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                          if (v === '.') {
                            return '0.';
                          }
                          return prev;
                        }
                        return v;
                      },
                    })}
                    type={type}
                    placeholder="money format"
                    ref={el => this.inputRef = el}
                    onVirtualKeyboardConfirm={v => console.log('onVirtualKeyboardConfirm:', v)}
                    clear
                    moneyKeyboardWrapProps={moneyKeyboardWrapProps}
                  >数字键盘</InputItem>
                  <List.Item>
                    <div
                      style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                      onClick={() => this.inputRef.focus()}
                    >
                      click to focus
                    </div>
                  </List.Item>
                </List>
                <WhiteSpace />

        <List renderHeader={() => 'Customize the extra content in the right'}>
          <InputItem
            {...getFieldProps('preice')}
            placeholder="0.00"
            extra="¥"
          >价格</InputItem>
        </List>

        <WhiteSpace />
        <List renderHeader={() => 'Format'}>
          <InputItem
            {...getFieldProps('bankCard', {
              initialValue: '8888 8888 8888 8888',
            })}
            type="bankCard"
            value={this.state.cardNo}
            onChange={this.changeCardNo.bind(this)}
          >银行卡</InputItem>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="135 4895 2869"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="****"
          >密码</InputItem>
          <InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="click to show number keyboard"
          >数字键盘</InputItem>
          <InputItem
            {...getFieldProps('digit')}
            type="digit"
            placeholder="click to show native number keyboard"
          >数字键盘</InputItem>
        </List>

        <WhiteSpace />

              </div>
        );    
    }
}
export default createForm()(User);