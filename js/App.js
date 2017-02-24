var App = angular.module('App', ['ui.router']);


App.config(function($stateProvider){

  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: './views/home.html'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: './views/about.html'
  };

  var blogState = {
    name: 'blog',
    url: '/blog',
    templateUrl: './views/blog.html'
  };

  var shopState = {
    name: 'shop',
    url: '/shop',
    templateUrl: './views/shop.html',
    controller: 'ShopController'
  };

  var productDetailsState = {
    name: 'product-details',
    url: '/product-details/{productId}',
    templateUrl: './views/product-details.html',
    controller: 'ProductDetailsController'
  };

  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(blogState);
  $stateProvider.state(shopState);
  $stateProvider.state(productDetailsState);

});
