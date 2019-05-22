import Home from './home';
import User from './user';
import Login from './login';
import Carlist from './carlist';
import Help from './help';
import Test from './test';
import Dealer from './dealer';
import Options from './options';
export const RouterConfig = [
  	{
	    path: '/user',
	    exact : true,
	    component: User,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/carlist',
	    exact : true,
	    component: Carlist,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/help',
	    exact : true,
	    component: Help,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/options',
	    exact : true,
	    component: Options,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/test',
	    exact : true,
	    component: Test,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/dealer',
	    exact : true,
	    component: Dealer,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/',
	    exact : true,
	    component: Home
  	}
];