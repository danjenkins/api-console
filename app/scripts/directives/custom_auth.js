'use strict';

(function() {
  RAML.Directives.oauth1 = function() {
    return {
      restrict: 'E',
      templateUrl: 'views/custom_auth.tmpl.html',
      replace: true,
      scope: {
        credentials: '='
      }
    };
  };
})();
