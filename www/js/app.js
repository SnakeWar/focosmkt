// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  }).state('app.quemsomos', {
    url: '/quemsomos',
    views: {
      'menuContent': {
        templateUrl: 'templates/quemsomos.html'
      }
    }
  }).state('app.oquefazemos', {
      url: '/oquefazemos',
      views: {
        'menuContent': {
          templateUrl: 'templates/oquefazemos.html'
        }
      }
    }).state('app.ondeatuamos', {
      url: '/ondeatuamos',
      views: {
        'menuContent': {
          templateUrl: 'templates/ondeatuamos.html'
        }
      }
    }).state('app.clientes', {
      url: '/clientes',
      views: {
          'menuContent': {
              templateUrl: 'templates/clientes.html'
          }
      }
  }).state('app.contato', {
      url: '/contato',
      views: {
          'menuContent': {
              templateUrl: 'templates/contato.html'
          }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/quemsomos');
});
