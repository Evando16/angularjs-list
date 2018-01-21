var app = angular.module('application', []);

app.controller('listController', ['$scope', function ($scope) {
    var vm = this;
    vm.list = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

    vm.deleteMain = function (id) {
        i = vm.list.indexOf(id);
        vm.list.splice(i, 1);
        alert('Remove id: ' + id);
    }
}]);

app.directive('header', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/header.html'
    }
})

app.directive('list', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/list.html',
        scope: {
            directivelist: '=',
            deleteCallback: '&'
        },
        controller: ['$scope', function (vm) {
            vm.vm = vm;

            vm.delete = function (id) {
                vm.deleteCallback({ id: id });
            }
        }]
    };
})

app.directive('itemDirective', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/item.html',
        scope: {
            itemModel: '=',
            deleteClick: '&'
        }, controller: ['$scope', function (vm) {
            vm.vm = vm
        }]
    }
})