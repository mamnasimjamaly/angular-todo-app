angular
	.module('ToDo' , [])
	.controller('todoController', ['$scope' , function($scope) {
		$scope.todos = [{
			'title' : 'Build Todo app',
			'done'	: false
			}
		];

		$scope.addToDo = function() {
			$scope.todos.push({'title' : $scope.newToDo , 'done' : false});
			$scope.newToDo = '';
		};
		$scope.clearCompleted = function() {
			$scope.todos = $scope.todos.filter(function (item){
				return !item.done;
			});		
		};
		$scope.flipToDoDone = function(todo) {
			if (todo.done) {
				todo.done = false;
			} else {
				todo.done = true;
			}		
		}; 
	}]);