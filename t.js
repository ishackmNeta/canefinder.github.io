
// sunkenpits


var sunkenpits = L.geoJSON().addTo(map);
$.getJSON("sp2.geojson",function(data){
    var ratIcon = L.icon({
    iconUrl: 'dig.png',
    shadowUrl: 'dig.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }); 

    L.geoJson(data,{
    pointToLayer: function(feature,latlng){
      var marker = L.marker(latlng,{icon: ratIcon});
      marker.bindPopup("Sunken Pit" +'<br>' + 'SI_No:'+feature.properties.si + '<br>'+ feature.properties.volume +'<br>' + 'Date of Construction:' + feature.properties.date + '<br>');
      return marker;
    }
  }).addTo(sunkenpits);
});




// water structure


var dam = L.geoJSON().addTo(map);
$.getJSON("dam.geojson",function(data){
    var ratIcon = L.icon({
    iconUrl: 'dam.png',
    shadowUrl: 'dam.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  }); 

    L.geoJson(data,{
    pointToLayer: function(feature,latlng){
      var marker = L.marker(latlng,{icon: ratIcon});
      marker.bindPopup(village + '<br>' + 'S_No:' + feature.properties.s_no + '<br>' + 'Activity: ' + feature.properties.activity + '</br>' + 'Volume: ' + feature.properties.volume + '</br>' + 'Length: ' + feature.properties.length + 'm</br>'+ 'Width: ' + feature.properties.width + 'm</br>' + 'Depth: ' + feature.properties.depth + 'm</br>');
      return marker;
    }
  }).addTo(dam);
});

//


