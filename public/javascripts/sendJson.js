/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var app = angular.module('app', ['ngRoute']);

app.controller('sendJsonController',
        function senddata($http, $scope) {
            var jsonstring = angular.element($('#inputFields'));

            $http.post('fields/addFields', jsonstring).success(function (msg) {
                $scope.status = msg;
            });
        });


