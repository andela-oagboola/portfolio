var profileControllers = angular.module("profile");
profileControllers.controller("homeController", function() {});
profileControllers.controller("aboutController", function() {});

profileControllers.controller("projectController", ['getProjects', '$scope', function(getProjects, $scope) {
  // getProjects.getRepos().success(function(response) {
  //   console.log(response);
  //   $scope.repoImages = ["businessListFinder", "calculator", "finderApp", "git-search", "hot-or-cold", "soundcloud"];
  //   $scope.repos = response;
  // });
  $scope.repos = [
  {name: "Business Lister", image: "businessListFinder.png", link: "http://andela-oagboola.github.io/businessListFinder/" },
  {name: "Calculator", image: "calculator.png", link:"http://andela-oagboola.github.io/calculator/"},
  {name: "FinderApp", image: "finderApp.png", link: "http://andela-oagboola.github.io/finderApp/"},
  {name: "Git Hub Profile Search", image: "git-search.png", link: "http://andela-oagboola.github.io/git-search/"},
  {name: "Music Player App", image: "soundcloud.png", link: "http://andela-oagboola.github.io/soundcloud/"}
  ];
}]);
profileControllers.controller("contactController", ['$scope',function($scope) {
  $scope.mapOptions = {
    center: {
      lat: 6.5057173,
      lng: 3.377992899999981
    },
    zoom: 17
  };
  $scope.LatLng = new google.maps.LatLng(6.5057173, 3.377992899999981);
  $scope.map = new google.maps.Map(document.getElementById('mapArea'), $scope.mapOptions);
  $scope.marker = new google.maps.Marker({
    position: $scope.LatLng,
    map: $scope.map,
    title: "here"
  });
  $scope.marker.setMap($scope.map);
}]);

profileControllers.controller('MyController', function($scope, $mdSidenav) {

  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.close = function() {
    $mdSidenav('left').close()
      .then(function() {
        $log.debug("close LEFT is done");
      });
  };
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
      .then(function() {
        $log.debug("toggle left is done");
      });
  };
});
