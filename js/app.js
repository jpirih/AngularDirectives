/**
 * Created by Janko on 22. 10. 2016.
 */
angular.module('app', []);

// text validation directive
angular.module('app').directive('textValidationDirective', function () {
    return {
        restrict: 'AE',
        scope: {message: '='},
        templateUrl: 'templates/text-validation.html',
        controller: textValidationDirectiveController
    };
});
// text-validation-directive controller
function textValidationDirectiveController($scope) {
    $scope.message = "";
    $scope.validMessage = false;
    $scope.messageLength = null;
    $scope.$watch('message', function (userMesssage) {
        $scope.message = userMesssage;
        if($scope.message.length >= 10){
            $scope.validMessage = true;
        }
        // letters  counter
        $scope.messageLength = $scope.message.length;
    });
}

// month name directive
angular.module('app').directive('monthDirective', function () {
return {
    scope: {data: '='},
    template: '<p>{{ getMonth() }}</p>',
    controller: monthDirectiveController
};
});

// month-directive controller
function monthDirectiveController($scope) {

    $scope.getMonth = function () {

        switch ($scope.data) {
            case 1:
                return "Januar - Prosinec";
            case 2:
                return "Februrar - Svečan";
            case 3:
                return "Marec - Sušec";
            case 4:
                return "April - Mali traven";
            case 5:
                return "Maj - Veliki traven";
            case 6:
                return "Junij - Rožnik";
            case 7:
                return "Julij - Mali Srpan";
            case 8:
                return "Avgust  - Veliki srpan";
            case 9:
                return "September - Kimavec";
            case 10:
                return "Oktober - Vinotok";
            case 11:
                return "November - Listopad";
            case 12:
                return "December - Gruden";
            default:
                return "Vnesi število od 1 do 12!"
        }

        return $scope.data;
    };
}

// subscribe form directive
angular.module('app').directive('subscribeDirective', function () {
    return{
        restrict: 'E',
        scope: {email: '='},
        templateUrl: 'templates/subscribe-form.html',
        controller: subscribeDirectiveController
    };
});

// subscribe directive controller
function subscribeDirectiveController($scope, MailingListFactory) {
    $scope.statusMessage = null;
    $scope.subscribe = function (email) {
        var mailingList = MailingListFactory.mailingList;
        mailingList.push(email);
        $scope.statusMessage = "Prijava na E novice je uspela "

    }

}

// mailing list controller
angular.module('app').controller('MailingListController', function ($scope, MailingListFactory) {
    $scope.emails = MailingListFactory.mailingList;
    console.log($scope.emails);

});

// mailing list factory
angular.module('app').factory('MailingListFactory', function () {
    var malingList = [];
    return {
        mailingList: malingList
    }

});