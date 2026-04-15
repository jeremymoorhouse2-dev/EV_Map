mapboxgl.accessToken = "pk.eyJ1Ijoiam1vb3Job3VzZSIsImEiOiJjbW13YWVoenYydXQ1MnJwbGVlemRxdzdtIn0.6TPYi4u6gPKJmjUrXj4Orw";

const bounds = [
  [-141, 41],
  [-52, 70]
];

const beforeMap = new mapboxgl.Map({
  container: "before",
  style: "mapbox://styles/mapbox/light-v11",
  bounds: bounds,
  fitBoundsOptions: { padding: 30 }
});

const afterMap = new mapboxgl.Map({
  container: "after",
  style: "mapbox://styles/mapbox/light-v11",
  bounds: bounds,
  fitBoundsOptions: { padding: 30 }
});

beforeMap.on("load", () => {
  beforeMap.addSource("ev2015", {
    type: "geojson",
    data: "data/ev_fast_chargers_2015_buffer_300km_dissolved.geojson"
  });

  beforeMap.addLayer({
    id: "fill2015",
    type: "fill",
    source: "ev2015",
    paint: {
      "fill-color": "#D52B1E",
      "fill-opacity": 0.5
    }
  });
});

afterMap.on("load", () => {
  afterMap.addSource("ev2025", {
    type: "geojson",
    data: "data/ev_fast_chargers_2025_buffer_300km_dissolved.geojson"
  });

  afterMap.addLayer({
    id: "fill2025",
    type: "fill",
    source: "ev2025",
    paint: {
      "fill-color": "#D52B1E",
      "fill-opacity": 0.5
    }
  });
});

new mapboxgl.Compare(beforeMap, afterMap, "#comparison-container");
