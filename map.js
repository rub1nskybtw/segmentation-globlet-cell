d3.csv(
	    "https://raw.githubusercontent.com/rub1nskybtw/segmentation-globlet-cell/main/map.csv",
	     function(err, rows) {
		 function unpack(rows, key) {
		   rows.Lon = +rows.Lon;
           rows.Lat = +rows.Lat;
           rows.text = +rows.text;
		   return rows.map(function(row) {
	       return row[key];
		   });
		   }

		                let data = [
			            {
				                type: "scattermapbox",
				                text: unpack(rows, "text"),
				                lon: unpack(rows, "Долгота"),
				                lat: unpack(rows, "Широта"),
				                marker: { color: "fuchsia", size: 6}
			            }
		                ];



                        var layout = {
			            dragmode: "zoom",
			            mapbox: { style: "open-street-map", center: { lat: 56.822660, lon: 60.605230 }, zoom: 12 },
			            margin: { r: 0, t: 0, b: 0, l: 0 },
		                };

		                Plotly.newPlot("myDiv", data, layout);

                });

        let massiv1 = ""
        let massiv = [ "https://raw.githubusercontent.com/rub1nskybtw/segmentation-globlet-cell/main/map1.csv",
                       "https://raw.githubusercontent.com/rub1nskybtw/segmentation-globlet-cell/main/map2.csv",
                       "https://raw.githubusercontent.com/rub1nskybtw/segmentation-globlet-cell/main/map3.csv",
                       "https://raw.githubusercontent.com/rub1nskybtw/segmentation-globlet-cell/main/map4.csv",
                       "https://raw.githubusercontent.com/rub1nskybtw/segmentation-globlet-cell/main/map5.csv",
                       "https://raw.githubusercontent.com/rub1nskybtw/segmentation-globlet-cell/main/map6.csv",
                       "https://raw.githubusercontent.com/rub1nskybtw/segmentation-globlet-cell/main/map7.csv"]
        var button = document.querySelector("button.lenin");
        button.addEventListener("click", function() {
        massiv1 = massiv[0]

                d3.csv(
	    massiv1,
	    function(err, rows) {
		        function unpack(rows, key) {
		         rows.Lon = +rows.Lon;
                 rows.Lat = +rows.Lat;
                rows.text = +rows.text;
			    return rows.map(function(row) {
				        return row[key];
			    });
		        }

		                let data = [
			            {
				                type: "scattermapbox",
				                text: unpack(rows, "text"),
				                lon: unpack(rows, "Долгота"),
				                lat: unpack(rows, "Широта"),
				                marker: { color: "fuchsia", size: 6}
			            }
		                ];



                var layout = {
			    dragmode: "zoom",
			    mapbox: { style: "open-street-map", center: { lat: 56.822660, lon: 60.605230 }, zoom: 12 },
			    margin: { r: 0, t: 0, b: 0, l: 0 },
		        };

		        Plotly.newPlot("myDiv", data, layout);

        })
        });


        var button = document.querySelector("button.JD");
        button.addEventListener("click", function() {
        massiv1 = massiv[1]

                d3.csv(
	    massiv1,
	    function(err, rows) {
		        function unpack(rows, key) {
		         rows.Lon = +rows.Lon;
                 rows.Lat = +rows.Lat;
                rows.text = +rows.text;
			    return rows.map(function(row) {
				        return row[key];
			    });
		        }

		                let data = [
			            {
				                type: "scattermapbox",
				                text: unpack(rows, "text"),
				                lon: unpack(rows, "Долгота"),
				                lat: unpack(rows, "Широта"),
				                marker: { color: "fuchsia", size: 6}
			            }
		                ];



                var layout = {
			    dragmode: "zoom",
			    mapbox: { style: "open-street-map", center: { lat: 56.857280, lon: 60.593780 }, zoom: 12 },
			    margin: { r: 0, t: 0, b: 0, l: 0 },
		        };

		        Plotly.newPlot("myDiv", data, layout);

        })
        });


        var button = document.querySelector("button.Verh");
        button.addEventListener("click", function() {
        massiv1 = massiv[2]

                d3.csv(
	    massiv1,
	    function(err, rows) {
		        function unpack(rows, key) {
		         rows.Lon = +rows.Lon;
                 rows.Lat = +rows.Lat;
                rows.text = +rows.text;
			    return rows.map(function(row) {
				        return row[key];
			    });
		        }

		                let data = [
			            {
				                type: "scattermapbox",
				                text: unpack(rows, "text"),
				                lon: unpack(rows, "Долгота"),
				                lat: unpack(rows, "Широта"),
				                marker: { color: "fuchsia", size: 6}
			            }
		                ];



                var layout = {
			    dragmode: "zoom",
			    mapbox: { style: "open-street-map", center: { lat: 56.825420, lon: 60.554180 }, zoom: 12 },
			    margin: { r: 0, t: 0, b: 0, l: 0 },
		        };

		        Plotly.newPlot("myDiv", data, layout);

        })
        });


        var button = document.querySelector("button.Kirov");
        button.addEventListener("click", function() {
        massiv1 = massiv[3]

                d3.csv(
	    massiv1,
	    function(err, rows) {
		        function unpack(rows, key) {
		         rows.Lon = +rows.Lon;
                 rows.Lat = +rows.Lat;
                rows.text = +rows.text;
			    return rows.map(function(row) {
				        return row[key];
			    });
		        }

		                let data = [
			            {
				                type: "scattermapbox",
				                text: unpack(rows, "text"),
				                lon: unpack(rows, "Долгота"),
				                lat: unpack(rows, "Широта"),
				                marker: { color: "fuchsia", size: 6}
			            }
		                ];



                var layout = {
			    dragmode: "zoom",
			    mapbox: { style: "open-street-map", center: { lat: 56.845350, lon: 60.658040 }, zoom: 12 },
			    margin: { r: 0, t: 0, b: 0, l: 0 },
		        };

		        Plotly.newPlot("myDiv", data, layout);

        })
        });


        var button = document.querySelector("button.Oktyab");
        button.addEventListener("click", function() {
        massiv1 = massiv[4]

                d3.csv(
	    massiv1,
	    function(err, rows) {
		        function unpack(rows, key) {
		         rows.Lon = +rows.Lon;
                 rows.Lat = +rows.Lat;
                rows.text = +rows.text;
			    return rows.map(function(row) {
				        return row[key];
			    });
		        }

		                let data = [
			            {
				                type: "scattermapbox",
				                text: unpack(rows, "text"),
				                lon: unpack(rows, "Долгота"),
				                lat: unpack(rows, "Широта"),
				                marker: { color: "fuchsia", size: 6}
			            }
		                ];



                var layout = {
			    dragmode: "zoom",
			    mapbox: { style: "open-street-map", center: { lat: 56.784330, lon: 60.738920 }, zoom: 12 },
			    margin: { r: 0, t: 0, b: 0, l: 0 },
		        };

		        Plotly.newPlot("myDiv", data, layout);

        })
        });


        var button = document.querySelector("button.Ord");
        button.addEventListener("click", function() {
        massiv1 = massiv[5]

                d3.csv(
	    massiv1,
	    function(err, rows) {
		        function unpack(rows, key) {
		         rows.Lon = +rows.Lon;
                 rows.Lat = +rows.Lat;
                rows.text = +rows.text;
			    return rows.map(function(row) {
				        return row[key];
			    });
		        }

		                let data = [
			            {
				                type: "scattermapbox",
				                text: unpack(rows, "text"),
				                lon: unpack(rows, "Долгота"),
				                lat: unpack(rows, "Широта"),
				                marker: { color: "fuchsia", size: 6}
			            }
		                ];



                var layout = {
			    dragmode: "zoom",
			    mapbox: { style: "open-street-map", center: { lat: 56.893250, lon: 60.615420 }, zoom: 12 },
			    margin: { r: 0, t: 0, b: 0, l: 0 },
		        };

		        Plotly.newPlot("myDiv", data, layout);

        })
        });


        var button = document.querySelector("button.Chkal");
        button.addEventListener("click", function() {
        massiv1 = massiv[6]

                d3.csv(
	    massiv1,
	    function(err, rows) {
		        function unpack(rows, key) {
		         rows.Lon = +rows.Lon;
                 rows.Lat = +rows.Lat;
                rows.text = +rows.text;
			    return rows.map(function(row) {
				        return row[key];
			    });
		        }

		                let data = [
			            {
				                type: "scattermapbox",
				                text: unpack(rows, "text"),
				                lon: unpack(rows, "Долгота"),
				                lat: unpack(rows, "Широта"),
				                marker: { color: "fuchsia", size: 6}
			            }
		                ];



                var layout = {
			    dragmode: "zoom",
			    mapbox: { style: "open-street-map", center: { lat: 56.801640, lon: 60.612880 }, zoom: 12 },
			    margin: { r: 0, t: 0, b: 0, l: 0 },
		        };

		        Plotly.newPlot("myDiv", data, layout);

        })
        });


