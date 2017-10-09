angular.module('p76').controller('indexController',
        [
           '$scope',
           'DataBaseService',
           function ($scope, DataBase) {
              $scope.show = true;
              $scope.data = {};
              $scope.mensaje = '';
              $scope.event = function () {
                 $scope.mensaje = ' Hello ' + $scope.data.name + ' you are ' + $scope.data.age  + ' years old ';
                 $scope.show = false;
              };
              $scope.restablecer = function () {
                 $scope.data = {};
                 $scope.show = true;
                 $scope.mensaje = '';
              };
           }
        ]);