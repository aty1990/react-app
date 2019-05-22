const dealerObj = {
	dealerList : [],
	total : 0,
	selectIdx:null
}
const dealer = (state = dealerObj, action) => {
	switch (action.type) {
		case 'SET_DEALER_LIST':
			return {
				...state,
				selectIdx : sessionStorage.selectIdx?sessionStorage.selectIdx:action.data.selectIdx,
				dealerList : action.data.dealerList,
				total : action.data.total
			};
		case 'CHANGE_IDX':
			return {...state,selectIdx:action.idx};
		default :
			return state;
	}
}
export default dealer;