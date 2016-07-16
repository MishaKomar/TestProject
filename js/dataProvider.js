
module
	.factory("colorNameProvider", colorNameProvider);

    	colorNameProvider.$inject = [
    		'$http',
    		'$q'
    	];

    	function colorNameProvider($http, $q) {

	        var service = {
	            getColors: getColors,
	            getColorsCustom: getColorsCustom  
	        };

	        return service;

	        function getColors() {
	        	return {
					    "colorsArray":
					    [
					        {
					            "colorName":"red",
					            "hexValue":"#f00"
					        },
					        {
					            "colorName":"green",
					            "hexValue":"#0f0"
					        },
					        {
					            "colorName":"blue",
					            "hexValue":"#00f"
					        },
					        {
					            "colorName":"cyan",
					            "hexValue":"#0ff"
					        },
					        {
					            "colorName":"magenta",
					            "hexValue":"#f0f"
					        },
					        {
					            "colorName":"yellow",
					            "hexValue":"#ff0"
					        },
					        {
					            "colorName":"black",
					            "hexValue":"#000"
					        }
					    ]
				}
	        }
	   		
	   		function getColorsCustom() {
	        	return {
					    "colorsArray":
					    [
					        {
					            "colorName":"red",
					            "hexValue":"#f00",
					            "rgbValue":"rgb(255, 0, 0)",
					            "hslValue":"hsl(0, 100%, 50%)"
					        },
					        {
					            "colorName":"green",
					            "hexValue":"#0f0",
					            "rgbValue":"rgb(0, 255, 0)",
					            "hslValue":"hsl(120, 100%, 50%)"
					        },
					        {
					            "colorName":"blue",
					            "hexValue":"#00f",
					            "rgbValue":"rgb(0, 0, 255)",
					            "hslValue":"hsl(240, 100%, 50%)"
					        },
					        {
					            "colorName":"cyan",
					            "hexValue":"#0ff",
					            "rgbValue":"rgb(0, 255, 255)",
					            "hslValue":"hsl(180, 100%, 50%)"
					        },
					        {
					            "colorName":"magenta",
					            "hexValue":"#f0f",
					            "rgbValue":"rgb(255, 0, 255)",
					            "hslValue":"hsl(300, 100%, 50%)"
					        },
					        {
					            "colorName":"yellow",
					            "hexValue":"#ff0",
					            "rgbValue":"rgb(255, 255, 0)",
					            "hslValue":"hsl(60, 100%, 50%)"
					        },
					        {
					            "colorName":"black",
					            "hexValue":"#000",
					            "rgbValue":"rgb(0, 0, 0)",
					            "hslValue":"hsl(0, 0%, 0%)"
					        }
					    ]
				}
	        }

	        // function getColors() {
	        //     var defer = $q.defer();
	        //     $http({
	        //         method: 'GET',
	        //         url: "data.json"  // google chrome doesn't allow this, need to run a local server
	        //     }).then(function (response) {
	        //         defer.resolve(response.data);
	        //         console.success("Request: get data, success", response);
	        //     }, function (error) {
	        //         console.error("Request: get data, error", error);
	        //         defer.reject(error);
	        //     });
	        //     return defer.promise;
	        // }
	};