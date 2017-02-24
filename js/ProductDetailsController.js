function ProductDetailsController($scope, ShopService, $stateParams){
  console.log('Loading ProductDetailsController ...');

  console.log($stateParams);

  ShopService.getProductById($stateParams.productId).then(function(product){
    $scope.product = product;
  });
}


App.controller('ProductDetailsController', ProductDetailsController);
