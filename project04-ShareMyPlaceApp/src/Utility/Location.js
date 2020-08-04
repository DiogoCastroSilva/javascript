export async function getCoordFromAddress(address) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search/${address}?format=json&polygon_svg=1`);
    if (!response) {
        throw new Error('Failed to find address');
    }

    const data = await response.json();
    return {
        lng: data[0].lon,
        lat: data[0].lat
    };
}

function simpleReverseGeocoding(lon, lat) {
    fetch('http://nominatim.openstreetmap.org/reverse?format=json&lon=' + lon + '&lat=' + lat).then(function(response) {
      return response.json();
    }).then(function(json) {
      document.getElementById('address').innerHTML = json.display_name;
    });
  }