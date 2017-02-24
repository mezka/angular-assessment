App.directive('productTmpl', function(){

  return{
    restrict: 'AE',
    templateUrl: './views/product-tmpl.html',
    controller: function($scope){
      $scope.showImg = true;

      $scope.toggle = function(){
        if($scope.showImg){
          $scope.showImg = false;
        }else {
          $scope.showImg = true;
        }
      };
    }

    // link: function(scope, element, attributes){
    //
    //   var imgParent = element.find("img").parent();
    //   var link = imgParent.next();
    //
    //   imgParent.on('click', function(){
    //     console.log("clicked on imgParent");
    //     imgParent.toggleClass('hide');
    //     link.toggleClass('hide');
    //   });
    //
    //   link.on('click', function(){
    //     console.log("clicked on link");
    //     imgParent.toggleClass('hide');
    //     link.toggleClass('hide');
    //   });
    // }
  };
});
