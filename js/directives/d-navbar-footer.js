'use strict';

var app;
app = angular.module('risoApp');

  app.directive('navbar', function() {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.templateUrl = 'views/navbar.html';
    return ddo;
  });

  app.directive('rodape', function() {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.templateUrl = 'views/footer.html';
    return ddo;
  });
