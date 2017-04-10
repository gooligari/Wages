import angular from 'angular';
import Energytrend from './energytrend/energytrend';
import Shift from './shift/shift';
import Energy from './energy/energy';
import Products from './products/products';
import Budget from './budget/budget';
import Baseline from './baseline/baseline';

let componentModule = angular.module('app.components', [
  Energytrend,
  Shift,
  Energy,
  Products,
  Budget,
  Baseline  
])

.name;

export default componentModule;
