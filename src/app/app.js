(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("platform", [
    'platform.home',
    'platform.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
])));
