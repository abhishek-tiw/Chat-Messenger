var socketApp = angular.module('socketApp', []);

socketApp.filter('reverse', function () {
    return function (items) {
        return items.slice().reverse();
    };
});

socketApp.controller('mainController', function ($scope, $window) {
    $scope.loggedIn = false;
    $scope.userName = "";
    $scope.myText = "";
    $scope.message = [];

    $scope.login = function (name) {
        if (!(name === "")) {
            $scope.loggedIn = true;
            $scope.userName = name;
        }
    }

    $scope.emit = function (text) {
        if ($scope.myText != "") {
//            $scope.message = $scope.message.concat($scope.myText);
//            $window.socket.emit('hit', $scope.myText);
            var msg = {
                name: $scope.userName,
                body: $scope.myText
            };
            $scope.message = $scope.message.concat(msg);
            $window.socket.emit('hit', msg);
            $scope.myText = "";
        }
    };

    $scope.print = function (msg) {
        $scope.message = $scope.message.concat(msg);
    };
});
