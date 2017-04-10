import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productsComponent from './products.component';

let productsModule = angular.module('products', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('products', {
      url: '/products',
      component: 'products'
    });
})

.component('products', productsComponent)
  
.name;

export default productsModule;
