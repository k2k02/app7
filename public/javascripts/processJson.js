/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app=angular.module('app', ['ngRoute']);

app.controller('MainController',

function MainController($http, $log) {
  var vm = this;

  $http.get('/fields/fieldlist')
    .success(function(data) {
      vm.posts = data;
    });
});
