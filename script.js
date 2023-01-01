
var myApp = angular.module("ngModule", []);
myApp.controller('myController', myController);
function myController($scope) {
    $scope.UrlBase = "file:///D:/Linh%20Tinh/EventV2/";
    $scope.MaChuyen = "";
    $scope.ChuyenKhoa = function() {
        switch($scope.MaChuyen) {
            case 'HPNY':
                return window.location.href = $scope.UrlBase + "menu/HappyNewYear.html";
            
            default:
                window.alert("Mã bạn nhập không chính xác, kiểm tra lại mã bạn đã nhập!");
        }
    }
}

