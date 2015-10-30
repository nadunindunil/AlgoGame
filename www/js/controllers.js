angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modal.show();
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);

  };
  //$scope.login();
})

.controller("progressBar",function($scope,$timeout,Authorization){
    $scope.input = Authorization;

    var amt = $scope.input.count;

    console.log("inside pro" + $scope.input.count);

    $scope.countTo = amt;
    $scope.countFrom = 0;

    $timeout(function(){
      $scope.progressValue = amt;
    }, 200);


  })

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Say Hello', id: 1 },
    { title: 'Print the String', id: 2 },
    { title: 'What Ever', id: 3 },
    { title: 'Play with integers', id: 4 },
    { title: 'Time Game', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
    $scope.problemId = $stateParams.playlistId;
    $scope.problemDesc = "not yet implemented";
    $scope.problemTitle = "";
    $scope.problemExample = "";
    if($scope.problemId=="1")
    {
      $scope.problemTitle = "Say Hello";
      $scope.problemDesc = "Print 'Hello!'. What ever the input is the program should print 'Hello' in the standrad output.";
      $scope.problemExample = "Sample Output: Hello!";
    }
})

.controller('HomeCtrl', function($scope, $stateParams) {




  })

.controller('ResultCtrl', function($scope, $stateParams) {




  });
