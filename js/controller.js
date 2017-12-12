angular.module('RouteControllers', [])
    .controller('HomeController', function ($scope) {
        $scope.title = "Welcome!"
    })
    .controller('AboutController', function ($scope) {
        $scope.title = "Welcome!"
    })
    .controller('TreatmentsController', function ($scope) {
        $scope.title = "Welcome!"
    })
    .controller('CoursesController', function ($scope) {
        $scope.title = "Welcome!"
    })
    .controller('ContactController', function ($scope) {
        $scope.title = "Welcome!"
    })
    .controller('HeaderCtrl', function ($scope, $location) {
        $scope.isActive = function(currentLoc){
            return currentLoc === $location.path();
        }
    });