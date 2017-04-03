import angular from 'angular';
import Navbar from './navbar/navbar';
import Charts from './charts/charts';
import User from './user/user';


let commonModule = angular.module('app.common', [
  Navbar,
  Charts,
  User
])
  
.name;

export default commonModule;
