/**
 * Created by apple on 07/07/17.
 */
myApp.directive('autoComp',[ function () {
    return {
        restrict: 'EA',
        templateUrl: 'option-list.html',
        link: function (scope, element, event) {
                scope.listVisible = false;
                scope.dictionary = ["The", "String", "object", "lets", "you", "work", "with", "a", "series", "of", "characters.", "It", "wraps", "the", "string", "primitive", "data", "type", "with", "a", "number", "of", "helper", "methods"];//['hello', 'hell', 'gaurav', 'ayushi', 'search','now', 'new'];
               scope.makeSuggestions = function () {
                   scope.suggestions = scope.dictionary.filter(function (ele, index) {
                       return !ele.indexOf(scope.pattern + "") && (index === scope.dictionary.indexOf(ele));
                   });
               };
               scope.fillInput = function (event) {
                    var element = event.target;
                    scope.pattern = element.innerText;
               };
               scope.selectedIndex = 0;
               scope.autoComplete = function (event) {
                   if (event.key === 'Enter') {
                       if(scope.suggestions) {
                           scope.pattern = scope.suggestions[scope.selectedIndex];
                       }
                   }
                   else if (event.key === 'ArrowDown') {
                       if (scope.selectedIndex < scope.suggestions.length - 1) {
                           scope.selectedIndex++;
                       }
                   }
                   else if (event.key === 'ArrowUp') {
                       if (scope.selectedIndex > 0) {
                           scope.selectedIndex--;
                       }
                   }
               }

        }
    }
}]);