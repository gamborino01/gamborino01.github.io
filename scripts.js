//Scripts para Google Charts
//Carga la version actual y los paquetes corechart y bar
google.charts.load('current', {packages: ['corechart', 'bar']});

//Llamamos al metodo para construir una grafica de pastel
google.charts.setOnLoadCallback(drawPieChart);

//Llamamos al metodo para construir una grafica de barras
google.charts.setOnLoadCallback(drawBarChart);

function drawPieChart() {
  // Define los datos como una tabla
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Element');
  data.addColumn('number', 'Percentage');
  data.addRows([
    ['Basica', 76],
    ['Media Superior', 12],
    ['Vocacional', 5],
    ['Superior', 8.5]
  ]);

  // Crea una instancia de PieChart y la relaciona con el container en HTML.
  var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
  
  //Dibuja a piechart de acuerdo a los datos y las opciones elegidas.
  chart.draw(data, {is3D: true});
}

function drawBarChart() {
	//Define los datos como arrays, esta se usa cuando tenemos datos con dos o mas series.
  var data = google.visualization.arrayToDataTable([
    ['Ciudad', 'Población 2010', 'Población 2000'],
    ['New York City', 8175000, 8008000],
    ['Los Angeles', 3792000, 3694000],
    ['Chicago', 2695000, 2896000],
    ['Houston', 2099000, 1953000],
    ['Philadelphia', 1526000, 1517000]
  ]);

  //Definimos mas parametros para nuestra grafica
  var options = {
    title: 'Población de las ciudades más grandes de Estados Unidos',
    chartArea: {width: '50%'},
    hAxis: {
      title: 'Poblacion',
      minValue: 0
    },
    vAxis: {
      title: 'Ciudad'
    }
  };

  //Instanciamos a BarChart y lo relacionamos con su container HTML
  var chart = new google.visualization.BarChart(document.getElementById('myBarChart'));
  
  //Dibujamos la grafica de acuerdo a los datos y las opciones elegidas.
  chart.draw(data, options);
}


//Scripts para Google Maps
//Todo el codigo va contenido adentro de esta funcion.
function myMap() {

  //Ponemos las coordenadas de donde queremos que este centrado el mapa
  var myCenter = new google.maps.LatLng(19.446837,-99.073279);
  var torreEiffel = new google.maps.LatLng(48.858398, 2.294503);
  //Elegimos las propiedades de como se va a cargar el mapa.
  var mapProp= {center:myCenter, zoom:2, disableDefaultUI: false, mapTypeId: google.maps.MapTypeId.ROADMAP};

  //Creamos la instancia del mapa y la asociamos con el container HTML.
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  //Creamos un marcador animado y lo ponemos en las coordenadas predeterminadas.
  var marker = new google.maps.Marker({position:myCenter, animation:google.maps.Animation.BOUNCE});
  marker.setMap(map);

  var marker2 = new google.maps.Marker({position:torreEiffel, animation:google.maps.Animation.BOUNCE});
  marker2.setMap(map);

  //Creamos una ventana con informacion y la colocamos arriba del marcador.
  var infowindow = new google.maps.InfoWindow({content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."});
  infowindow.open(map,marker);

  var infowindow2 = new google.maps.InfoWindow({content: "Aqui esta la torre Eiffel"});
  infowindow2.open(map,marker2);
}