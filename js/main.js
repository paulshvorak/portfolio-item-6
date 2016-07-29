$(document).ready(function() {
    $(".menu-icon").click(function(){
    	$(".nav").toggle(200);
	});

	$(".slider").slick({
		dots: false,
		autoplay: true
	});
});

function initMap() {
        var mapDiv = document.getElementById('map');

        var myLatLng = {lat: 40.71, lng: -74.05};

        var map = new google.maps.Map(mapDiv, {
            center: myLatLng,
            zoom: 8,
            styles: [
			    {
			        "featureType": "landscape",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "lightness": 65
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "lightness": 51
			            },
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "lightness": 30
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "lightness": 40
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "stylers": [
			            {
			                "saturation": -100
			            },
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative.province",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": -25
			            },
			            {
			                "saturation": -100
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "hue": "#ffff00"
			            },
			            {
			                "lightness": -25
			            },
			            {
			                "saturation": -97
			            }
			        ]
			    }
			]
        });

        var marker = new google.maps.Marker({
		    map: map,
		    position: myLatLng,
		    title: 'Hello World!'
		});
    }


google.charts.load('current', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['Country', 'Amount of customers'],
          ['Germany', 5],
          ['United States', 7],
          ['Spain', 5],
          ['Canada', 6],
          ['France', 7],
          ['Netherlands', 4],
          ['Norway', 6],
          ['Poland', 5],
          ['Ukraine', 7]
        ]);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions'));

        chart.draw(data, options);
      }    
