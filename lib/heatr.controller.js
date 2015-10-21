/**
 * Created by previousdeveloper on 20.10.2015.
 */

(function (angular) {
    'use strict';

    angular
        .module('heatr')
        .controller('heatCtrl', heatCtrl);

    heatCtrl.$inject = ['$scope', 'coordService'];

    function heatCtrl($scope, coordService) {
        var vm = this;


        var map, heatmap;

        vm.initMap = function () {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 7,
                center: {lat: 39.036827, lng: 34.127995},
                mapTypeId: google.maps.MapTypeId.HYBRID
            });

            heatmap = new google.maps.visualization.HeatmapLayer({
                data: coordService.companyCoord(),
                map: map
            });
        };


    }

})(window.angular);