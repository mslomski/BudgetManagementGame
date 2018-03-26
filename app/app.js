'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
var app=angular.module('projectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router'
  ]);

  app.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
            url: '/home',
            templateUrl:'app/views/main.html',
            controller:'MainCtrl'
        })

        .state('start', {
            url:'/start',
            templateUrl:'app/views/start.html',
            controller:'StartCtrl'
        });
  });
