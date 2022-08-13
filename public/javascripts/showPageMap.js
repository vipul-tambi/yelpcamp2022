

mapboxgl.accessToken = mapToken;

//console.log(campground.geometry.coordinates);

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coordinates,
    zoom: 5
});

new mapboxgl.Marker().setLngLat(campground.geometry.coordinates).setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${campground.title}</h3><p>${campground.location}</p>`)).addTo(map);
const nav = new mapboxgl.NavigationControl({
    visualizePitch: true
});
map.addControl(nav, 'bottom-right');
