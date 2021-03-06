(function () {
    'use strict';

    angular.module('angularstrapApp')
        .controller('tasksController', tasksController);

    tasksController.$inject = ["$scope", "$http", "$window", "$q", "asyncService"];

    function tasksController($scope, $http, $window, $q) {

        $scope.tasks = [{
                title: "Deliver shares to Jeffersonville",
                bounty: 5,
                hourly: false,
                iconURL: "assets/img/car.svg",
            active:true
                        },
            {
                title: "Sort shares at Sullivan West HS",
                bounty: 10,
                hourly: true,
                iconURL: "assets/img/hands.svg",
                active:true
            },
            {
                title: "Cook lunch at community kitchen",
                bounty: 12,
                hourly: true,
                iconURL: "assets/img/basket.svg",
                active:true
            }]
        
        $scope.commitWork= function(bounty){
      
            bounty.active=false;

        }

        return $scope;
    }
})();
