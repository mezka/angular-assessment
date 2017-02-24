function ShopService($http){

  this.getAllProducts = function(){
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmounta.in/products'
    }).then(function(response){
      if(response.status === 200){
        console.log('Data came back alright, logging: ', response.data);
        return response.data;
      }else {
        console.log('There was a problem, logging status: ', response.status);
      }
    });
  };

  this.getProductById = function(id){
    return $http({
      method: 'GET',
      url: 'https://practiceapi.devmounta.in/products/' + id
    }).then(function(response){
      if(response.status === 200){
        console.log('Data came back alright, logging: ', response.data);
        return response.data;
      }else {
        console.log('There was a problem, logging status: ', response.status);
      }
    });
  };

}


App.service('ShopService', ShopService);
