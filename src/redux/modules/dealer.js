const dealerObj = {
	dealerList : [
		{ id:"0",name:"上海协调保留1",addr:"共和新路3208号1号楼","star":"5555",ratale:"暂无经销商评分"},
		{ id:"1",name:"上海协调保留2",addr:"共和新路3208号2号楼","star":"5555",ratale:"暂无经销商评分"}
	],
	selectIdx:null
}
const dealer = (state = dealerObj, action) => {
	let newData = Object.assign({}, state);
	switch (action.type) {
		case 'CHANGE_IDX':
			newData.selectIdx = action.selectIdx;
			return newData;
		case 'ADD_DEALER':
			newData.dealerList.push(action.item);
			return newData;
		default :
			return state;
	}
}
export default dealer;