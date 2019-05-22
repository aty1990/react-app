const homeData = [];
const home = (state = homeData, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					classId: action.classId,
					img: action.img
				}
			];
		case 'SET_DATA':
			return state.concat(action.iconList)
		default :
			return state;
	}
}
export default home;

//获取猜你喜欢state
export const getIconList = state => {
	console.log(state);
  	// return state.home.likes.ids.map(id => {
   //  	return state.entities.products[id]
  	// })
}

