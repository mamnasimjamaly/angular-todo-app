angular
	.module('ToDo' , [])
	.controller('todoController', ['$scope' , function($scope) {
		$scope.todos = [{
			'title' : 'Todo app',
			'done'	: false
			}
		];
	}]);