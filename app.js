(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var color;   // use for the color
  $scope.splitString = function()
  {
    var separator = ',';
    var arrayOfStrings;

    if(!!$scope.menu_string)
    {
      arrayOfStrings = $scope.menu_string.split(separator)
      console.log(arrayOfStrings);
      var empty_item = 0;
      var i;
      $scope.count_item = 0;
      for(i=0 ;i < arrayOfStrings.length;i++)
      {
        $scope.count_item += 1;
        if(arrayOfStrings[i] == "")
        {
          empty_item += 1;
        }
      }
      $scope.count_item = $scope.count_item - empty_item;
      console.log($scope.count_item);
      if($scope.count_item <= 3)
      {
        console.log("Enjoy!");
         $scope.message = "Enjoy!"
         color = "green";
      }
      else
         {
          console.log("Too much!");
          $scope.message = "Too much!"
          color = "green";
          }
    }
    else
    {
      console.log("Please enter data first");
      color = "red";
      $scope.message = "Please enter data first !!";
    }
  };
       // Treatment of the color
  $scope.functionThatReturnsColor = function() {
    var color_red = "color:red";
    var color_green = "color:green";
    if(color =="red")
    {
      return color_red;
    }
    else {
      return color_green;
    }
  };
}
})();
