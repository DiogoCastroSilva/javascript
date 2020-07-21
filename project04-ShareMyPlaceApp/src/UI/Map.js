import { Map as olMap, View } from 'ol/';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';


export class Map {
    constructor(coords) {
        this.render(coords);
    }

    render(coords) {
        if (!ol) {
            alert('Could not load maps library, please try again later.');
            return;
        }

        document.getElementById('map').innerHTML = ''; // clear the <p> in the <div id="map">

        new olMap({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([coords.lng, coords.lat]),
                zoom: 16
        })});
    }
}