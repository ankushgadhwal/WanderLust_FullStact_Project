mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  center:listing.geometry.coordinates,
  zoom: 9,
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  // .setPopup(new mapboxgl.Popup({ offset: 25 })
  //   .setHTML(`<h4>${JSON.parse(listing.location)}</h4> <p>Exact Location provided after booking</p>`))
  .addTo(map);