function ShopController($scope, ShopService){
  console.log('Loading ShopController ...');


  ShopService.getAllProducts().then(function(products){
    $scope.products = products;
  });

}


App.controller('ShopController', ShopController);
