
mapboxgl.accessToken = 'pk.eyJ1IjoiamNhbGdyZW4iLCJhIjoiY2tvbGduZmp1MDM1bzJ1bDYyeTAyM3o4cyJ9.nobUsUoWNjmRiCXipvsEuA';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
 center: [-96, 37.8],
  zoom: 3
});

map.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})
);


 



