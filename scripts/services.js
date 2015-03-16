var myModule = angular.module("profile");
myModule.factory("getProjects", ['$http', function($http) {
  var gitbase = "https://api.github.com/";
  var clientID = "43afa817ffad262576df";
  var clientSecret = "3a2a9d8d907b7cfb609a912224c64753af02da3d";
  return {
    getRepos: function() {
      return $http.get(gitbase + "users/andela-oagboola/repos?client_id=" + clientID + "&client_secret=" + clientSecret);
    }
  };
}]);