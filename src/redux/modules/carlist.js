const carList = [
	{"id":0,"spuName":"都市精英型","totalPrice":"215,500","zdj":"235,500"},
	{"id":1,"spuName":"都市共享型","totalPrice":"225,500","zdj":"255,500"},
	{"id":2,"spuName":"都市时尚型","totalPrice":"245,500","zdj":"275,500"}
]
const carlist = (state = carList, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				
			];
		default :
			return state;
	}
}

export default carlist;