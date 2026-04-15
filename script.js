mapboxgl.accessToken = "pk.eyJ1Ijoiam1vb3Job3VzZSIsImEiOiJjbW13YWVoenYydXQ1MnJwbGVlemRxdzdtIn0.6TPYi4u6gPKJmjUrXj4Orw";

const canadaBounds = [
  [-141.0, 41.0],
  [-52.0, 70.5]
];

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v11",
  bounds: canadaBounds,
  fitBoundsOptions: {
    padding: 30
  },
  maxBounds: canadaBounds
});

map.addControl(new mapboxgl.NavigationControl(), "top-right");

map.on("load", () => {
  map.addSource("ev-coverage-2015", {
    type: "geojson",
    data: "data/ev_fast_chargers_2015_buffer_300km_dissolved.geojson"
  });

  map.addLayer({
    id: "ev-coverage-2015-fill",
    type: "fill",
    source: "ev-coverage-2015",
    paint: {
      "fill-color": "#D52B1E",
      "fill-opacity": 0.5
    }
  });

  map.addLayer({
    id: "ev-coverage-2015-outline",
    type: "line",
    source: "ev-coverage-2015",
    paint: {
      "line-color": "#D52B1E",
      "line-width": 1.5
    }
  });
});