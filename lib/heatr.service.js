/**
 * Created by previousdeveloper on 21.10.2015.
 */

(function (angular) {
    'use strict';
    angular
        .module('heatr')
        .factory("coordService", heatrService);

    heatrService.$inject = ['$http', '$q'];

    function heatrService($http, $q) {

        var service = {

            companyCoord: companyCoord
        };

        return service;

        function companyCoord() {


            return [
                new google.maps.LatLng(41.112497, 28.987939),
                new google.maps.LatLng(41.112497, 28.987939),
                new google.maps.LatLng(41.112497, 28.987939),
                new google.maps.LatLng(41.112497, 28.987939),
                new google.maps.LatLng(41.036905, 28.790988),
                new google.maps.LatLng(41.073933, 28.699880),
                new google.maps.LatLng(41.066458, 28.863294),
                new google.maps.LatLng(41.065734, 28.865144),
                new google.maps.LatLng(37.784919, 29.092038),
                new google.maps.LatLng(37.784205, 29.078177),
                new google.maps.LatLng(41.565690, 35.913568),
                new google.maps.LatLng(41.286078, 36.33237),
                new google.maps.LatLng(39.646113, 27.883099),
                new google.maps.LatLng(39.646113, 27.883099),
                new google.maps.LatLng(39.646113, 27.883099),
                new google.maps.LatLng(39.646113, 27.883099),
                new google.maps.LatLng(39.646113, 27.883099),
                new google.maps.LatLng(39.646113, 27.883099),
                new google.maps.LatLng(39.646113, 27.883099),
                new google.maps.LatLng(39.646113, 27.883099),
                new google.maps.LatLng(39.646113, 27.883099),

                new google.maps.LatLng(41.107868, 29.031979),
                new google.maps.LatLng(39.646113, 27.8),
            ];
        }

    }

})(window.angular);