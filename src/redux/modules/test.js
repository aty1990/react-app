const testObj = {
	cityName : "请选择",
	cityCode : "",
	cityCode:"",
	dealerName:sessionStorage.dealerName?sessionStorage.dealerName:"请选择",
	userName:"allen",
	phone:"18873989983"
}
const test = (state = testObj, action) => {
	switch (action.type) {
		case 'SET_DEALER_NAME':
			return { ...state, dealerName: action.name };
		case 'SET_CITY_CODE':
			return { ...state, cityCode: action.cityCode };
		default :
			return state;
	}
}
export default test;