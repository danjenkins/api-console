angular.module('ramlConsoleApp')
    .controller('ramlOperationDetailsTryIt', function ($scope, ramlHelper) {
        $scope.request = {};
        $scope.url = {};

        $scope.urlParams = ramlHelper.processUrlParts($scope.resource.relativeUri);

        $scope.hasAdditionalParams = function (operation) {
            return (operation.query && operation.query.length) || operation.method === 'post' || operation.method === 'put';
        };

        $scope.showResponse = function () {
            return false;
        };
    });
