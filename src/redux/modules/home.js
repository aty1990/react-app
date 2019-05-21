const homeData = [
	{classId:0,img:"https://cms.sgmlink.com/ibuick/cdn/oss/1342/1.jpg"},
	{classId:1,img:"https://cms.sgmlink.com/ibuick/cdn/oss/1342/2.jpg"},
	{classId:2,img:"https://cms.sgmlink.com/ibuick/cdn/oss/1342/3.jpg"},
	{classId:3,img:"https://cms.sgmlink.com/ibuick/cdn/oss/1342/4.jpg"},
	{classId:4,img:"https://cms.sgmlink.com/ibuick/cdn/oss/1342/5.jpg"}
]
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
		default :
			return state;
	}
}

export default home;