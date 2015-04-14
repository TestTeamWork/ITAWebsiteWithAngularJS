/**
 * Created by Zhihui on 3/20/2015.
 */

var myapp = angular.module('myapp', []);

myapp.controller('MainCtrl', function ($scope) {
    $scope.showContent = function ($fileContent) {
        $scope.content = $fileContent;
    };
});
myapp.directive('onReadFile', function ($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);

            element.on('change', function (onChangeEvent) {
                var reader = new FileReader();

                reader.onload = function (onLoadEvent) {
                    scope.$apply(function () {
                        fn(scope, {$fileContent: onLoadEvent.target.result});
                    });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
});
myapp.directive('menuView',function(){
    return{
        restrict:'E',
        templateUrl:'PartialView/menu-view.html'
    }
});
myapp.directive('suggestSection', function() {
    return {
        restrict: 'E',
        templateUrl: 'PartialView/suggest-section.html'
    };
});
myapp.directive('footerView', function() {
    return {
        restrict: 'E',
        templateUrl: 'PartialView/footer-view.html'
    };
});
myapp.controller('ShowCategory', function ($scope) {
    $scope.items = [{
        text: 'HTML/CSS'
    }, {
        text: 'JACASCRIPT'
    }, {
        text: '.NET'
    }, {
        text: 'PHP'
    }];
    $scope.SubItems = [{
        text: 'JQuery'
    }, {
        text: 'Ajax'
    }, {
        text: 'AngularJS'
    }, {
        text: 'NodeJS'
    },{
        text:'Others'
    }];
    $scope.SubNets = [{
        text: 'Asp.net MVC'
    }, {
        text: 'WPF'
    }, {
        text: 'WebAPI'
    }, {
        text: 'Others'
    }];
});
myapp.controller('ReviewController',function($scope){
    $scope.review ={};
    $scope.addReview = function(){
       reviews.push($scope.review);
        $scope.review ={};
    }
});
var reviews = [{
    body:"I like this article!",
    author:"yancey1204@gmail.com"
}];
