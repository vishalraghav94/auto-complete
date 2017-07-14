/**
 * Created by apple on 07/07/17.
 */
myApp.directive('autoComp',['$interval', function ($interval) {
    return {
        restrict: 'EA',
        transclude: true,
        scope: {
            pattern: "@"
        },
        templateUrl: 'option-list.html',
        link: function (scope, element, attr, myCtrl) {
                scope.listVisible = false;
                scope.dictionary = ['hello', 'hell', 'gaurav', 'ayushi', 'search'];
                console.log(element);
                function filtering () {
                    console.log(scope.pattern);
                    scope.suggestions = scope.dictionary.filter(function (ele) {
                    return !ele.indexOf(scope.pattern+"");
                    });
                }

                element[0].previousElementSibling.addEventListener("keyup", function () {
                    console.log(scope.pattern);
                    scope.suggestions = scope.dictionary.filter(function (ele) {
                        return !ele.indexOf(scope.pattern+"");
                    });
                });
        }
    }
}]);