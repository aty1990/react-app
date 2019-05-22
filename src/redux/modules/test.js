const testObj = {
	cityName : "请选择",
	cityCode:"",
	dealerName:"请选择",
	userName:"",
	phone:""
}
const test = (state = testObj, action) => {
	switch (action.type) {
		case 'SET_DEALER_NAME':
			return { ...state, dealerName: action.name };
		case 'SET_CITY_CODE':
			return { ...state, cityCode: action.cityCode };
		case 'SET_CITY_NAME':
			return { ...state, cityName: action.cityName };
		case 'INIT_USER_INFO':
			return {
				...state,
				cityName:action.userInfo.cityName,
				cityCode:action.userInfo.cityCode,
				dealerName:action.userInfo.dealerName,
				userName:action.userInfo.userName,
				phone:action.userInfo.phone
			};
		default :
			return state;
	}
}
export default test;