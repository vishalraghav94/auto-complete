/**
 * Created by apple on 07/07/17.
 */
myApp.directive('autoComp',[ function () {
    return {
        restrict: 'EA',
        templateUrl: 'option-list.html',
        link: function (scope, element, event) {
            scope.patternList = '';
                scope.listVisible = false;
                scope.dictionary = ["The", "String", "object", "lets",
                    "you", "work", "with", "a", "series", "of", "characters.",
                    "It", "wraps", "the", "string", "primitive", "data", "type",
                    "with", "a", "number", "of", "helper", "methods",
                    "Typical", "implementations", "of", "A*", "use", "a", "priority",
                    "queue", "to", "perform", "the", "repeated", "selection", "of", "minimum", "(estimated)",
                    "cost", "nodes", "to", "expand.", "This", "priority", "queue", "is", "known", "as", "the",
                    "open", "set", "or", "fringe.", "At", "each", "step", "of", "the", "algorithm,", "the",
                    "node", "with", "the", "lowest", "f(x)", "value", "is", "removed", "from", "the", "queue,",
                    "the", "f", "and", "g", "values", "of", "its", "neighbors", "are", "updated",
                    "accordingly,", "and", "these", "neighbors", "are", "added", "to", "the", "queue.",
                    "The", "algorithm", "continues", "until", "a", "goal", "node", "has", "a", "lower", "f",
                    "value", "than", "any", "node", "in", "the", "queue", "(or", "until", "the", "queue", "is",
                    "empty).[a]", "The", "f", "value", "of", "the", "goal", "is", "then"];//['hello', 'hell', 'gaurav', 'ayushi', 'search','now', 'new'];
               scope.makeSuggestions = function () {
                   scope.pattern = scope.patternList.split(' ');
                   scope.pattern = scope.pattern[scope.pattern.length - 1];
                   scope.suggestions = scope.dictionary.filter(function (ele, index) {
                       return !ele.indexOf(scope.pattern + "") && (index === scope.dictionary.indexOf(ele));
                   });
               };
               scope.fillInput = function (event) {
                    var element = event.target;
                    scope.pattern = '';
                    var temp = element.innerText;
                    scope.patternList = scope.patternList.split(' ');
                    scope.patternList[scope.patternList.length - 1] = temp;
                    scope.patternList = scope.patternList.join(' ') + ' ';
               };
               scope.selectedIndex = 0;
               scope.autoComplete = function (event) {

                   if (event.key === "Backspace") {
                       scope.selectedIndex = 0;
                   }
                   if ((event.key !== 'Enter') && (event.key !== 'ArrowDown') && (event.key !== 'ArrowUp') ) {

                   }
                   else {
                       if (!scope.pattern) {
                           scope.selectedIndex = 0;
                       }
                       if (event.key === 'ArrowDown') {
                           if (scope.selectedIndex < scope.suggestions.length - 1) {
                               scope.selectedIndex++;
                           }
                       }
                       if (event.key === 'ArrowUp') {
                           if (scope.selectedIndex > 0) {
                               scope.selectedIndex--;
                           }
                       }
                       if (scope.suggestions) {
                           scope.pattern = scope.suggestions[scope.selectedIndex];

                       }
                       if (event.key === 'Enter') {
                           if (scope.suggestions) {
                               var temp = scope.suggestions[scope.selectedIndex];
                               scope.patternList = scope.patternList.split(' ');
                               scope.patternList[scope.patternList.length - 1] = temp;
                               scope.patternList = scope.patternList.join(' ') + ' ';
                               scope.suggestions = undefined;
                               scope.selectedIndex = 0;
                           }
                       }
                   }
               }

        }
    }
}]);