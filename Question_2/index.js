var app = angular.module('myApp', []);

app.filter("reverse", function() {
    return function(input) {
      var result = "";
      input = input || "";
      for (var i=0; i<input.length; i++) {
        result = input.charAt(i) + result;
      }
      return result;
    };
  });   



    app.controller('myCtrl', function($scope) {
        $scope.t1 = "";
        $scope.t2 = "";
        $scope.t3 = "";
        $scope.t4 = "";

        
                
    });