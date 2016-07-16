
module
	.directive("colorsTable", function () {
        return {
        	restrict: 'EA',
            scope: { colors: "=colors" },
            link: function (scope, element, attrs) {

                if (angular.isDefined(scope.colors) && angular.isArray(scope.colors)) {
	                
	                var table = angular.element("<table>");
	                table.addClass("table table-striped")
	                
	                var div = angular.element("<div>").addClass("table-responsive");
                    div.append(table);
                    element.append(div);
                    
     				var thead = angular.element("<thead>");

                    var trHeader = angular.element("<tr>").addClass("header");
                    var tdHeader = angular.element("<td>").text("#");
				    trHeader.append(tdHeader);

				    var trArray = [];
				    // push list number
				    for (var i = 0; i < scope.colors.length; i++) {
				    	var tr = angular.element("<tr>");                		
	            		var td = angular.element("<td>").text(i + 1);
	                	tr.append(td);
	                	trArray.push(tr);
				    }
				    
				    // get all property of object
                    for(var nameOfProperty in scope.colors[0]) {
                    	// push property name to the header
					    tdHeader = angular.element("<td>").text(nameOfProperty);
					    trHeader.append(tdHeader);

					    // push value of property 
					    for (var i = 0; i < scope.colors.length; i++) {
					    	if (nameOfProperty === "hexValue"){
					    		var td = angular.element("<td>").text(scope.colors[i][nameOfProperty]);
						    	td.css("background-color", scope.colors[i].hexValue);
						    	trArray[i].append(td);
					    	} else {
					    		var td = angular.element("<td>").text(scope.colors[i][nameOfProperty]);
						    	trArray[i].append(td);
					    	}
					    }
					}
					thead.append(trHeader);

     				var tbody = angular.element("<tbody>");
					for (var i = 0; i < trArray.length; i++) {
						tbody.append(trArray[i]);
					}

					table.append(thead);
					table.append(tbody);

	            }
            }
        }
});