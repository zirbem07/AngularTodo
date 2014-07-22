/**
 * Created by maxwellzirbel on 7/21/14.
 */
angular.module('todoApp')
    .controller('MainCtrl', function ($scope) {

        $scope.todoList = [
            {text: "Learn AngularJS", done: false},
            {text: "Make a todo App", done: false}
        ];

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.todoList, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.addTodo = function() {
            if($scope.newTodo) {
                $scope.todoList.push(
                    { text: $scope.newTodo,
                      done: false
                    }
                );
                $scope.newTodo = '';
            }
        }

    });