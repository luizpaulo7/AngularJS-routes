var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "../routs/index.html"
  })
  .when("/clients", {
    templateUrl : "../routs/clients.html"
  })
  .when("/products", {
    templateUrl : "../routs/products.html"
  })
  .when("/help", {
    templateUrl : "../routs/help.html"
  });
});