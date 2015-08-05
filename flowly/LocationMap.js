

function getLocationDetail(data) {
		var arr={};
		var i=0;
		var arrMarker={};
		var style={};
		jQuery.each(data.Locations, function(index, item) {
	       arr={};
		   arrMarker={};   
		   switch(item.key) {
		   case "in":
                  arr.value = item.value;
				  arr.color= "#ff9800";
			      arr.highlight= "#ffb74d";
				  arr.label= item.valuestr;
				  arrMarker.latLng= [20.59, 78.96];
				  arrMarker.name=item.valuestr;
				  
				  wordMarkers[i] = arrMarker;

		        polarChartData[i] = arr;
			    i=i+1;
				break;
            case "us":
                arr.value= item.value;
				arr.color= "#f44336";
				arr.highlight= "#FF5A5E";
				arr.label= item.valuestr;
                arrMarker.latLng= [37.09, -95.71];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				
				polarChartData[i] = arr;
			    i=i+1;
				break;
			case "gb":
                arr.value= item.value;
				arr.color= "#9c27b0";
				arr.highlight= "#ce93d8";
				arr.label= item.valuestr;
				arrMarker.latLng= [55.38, -3.43];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;

                polarChartData[i] = arr;
			    i=i+1;
				break;
            case "au":
                arr.value= item.value;
				arr.color= "#2196f3";
				arr.highlight= "#90caf9";
				arr.label= item.valuestr;
                arrMarker.latLng = [-25.27, 133.77];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;

				polarChartData[i] = arr;
			    i=i+1;
				break;
			case "pk":
                arr.value= item.value;
				arr.color= "#009688";
				arr.highlight= "#80cbc4";
				arr.label= item.valuestr;
                arrMarker.latLng= [24.86, 67.01];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;

				polarChartData[i] = arr;
			    i=i+1;
				break;
			case "ae":
                arr.value= item.value;
				arr.color= "#00acc1";
				arr.highlight= "#4dd0e1";
				arr.label= item.valuestr;
				arrMarker.latLng= [23.42,53.85];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;

                polarChartData[i] = arr;
			    i=i+1;
				break;
            case "my":
                arr.value= item.value;
				arr.color= "#4caf50";
				arr.highlight= "#81c784";
				arr.label= item.valuestr;
                arrMarker.latLng = [4.21, 101.97];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				
				polarChartData[i] = arr;
			    i=i+1;
				break;
		    case "np":
                arr.value= item.value;
				arr.color= "#3f51b5";
				arr.highlight= "#7986cb";
				arr.label= item.valuestr;
                arrMarker.latLng= [28.39, 84.12];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;

				polarChartData[i] = arr;
			    i=i+1;
				break;
			case "za":
                arrMarker.latLng= [-30.56,22.94];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				break;
			case "nz":
                arrMarker.latLng= [-40.90, 174.88];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				break;
			case "ca":
                arrMarker.latLng= [56.13, -106.34];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				break;
			case "br":
                arrMarker.latLng= [-14.23, -51.92];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				break;
			case "it":
                arrMarker.latLng= [41.87, 12.56];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				break;
			case "jp":
                arrMarker.latLng= [35.68, 139.69];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				break;
			case "fr":
                arrMarker.latLng= [46.22, 2.21];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				break;
			case "de":
                arrMarker.latLng= [51.16, 10.45];
				arrMarker.name=item.valuestr;
				wordMarkers[i] = arrMarker;
				break;
		   }
		});	
}
