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
	    component: User,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/carlist',
	    component: Carlist,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/help',
	    component: Help,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/options',
	    component: Options,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/test',
	    component: Test,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '/dealer',
	    component: Dealer,
	    sceneConfig: {
	      	enter: 'from-right',
	     	exit: 'to-right'
	    }
  	},
  	{
	    path: '',
	    component: Home
  	}
];