import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import {FullScreen, defaults as defaultControls} from 'ol/control.js';
import Geocoder from "./geocoder";
// import Geocoder from "ol-geocoder"
import $ from "jquery";
import "ol/ol.css";
import "./static/css/ol-geocoder.css"

function initMap() {
    const view = new View({
        center: [-9101767, 2822912],
        zoom: 14,
    });

    const map = new Map({
        controls: defaultControls().extend([
            new FullScreen({
                source: 'fullscreen',
            }),
        ]),
        layers: [
            new TileLayer({
                source: new OSM(),
            }),
        ],
        target: 'map',
        view: view,
    });

    // const geocoder = new Geocoder('nominatim', {
    //     provider: 'osm',
    //     lang: 'en',
    //     placeholder: 'Search for ...',
    //     limit: 5,
    //     keepOpen: false,
    //     autoComplete: true,
    //     autoCompleteDelay: 1000,
    //     marker: false,
    //     debug: false,
    // });
    const geocoder = new Geocoder({
        provider: 'osm',
        lang: 'en',
        placeholder: 'Search for ...',
        limit: 5,
        keepOpen: true,
        autoComplete: true,
        autoCompleteDelay: 1000,
        marker: false,
        debug: true,
        map: map
    });
    map.addControl(geocoder);
}

$(document).ready(()=>{
    initMap();
})
