import {Control} from "ol/control";
import {Html} from "./html";
import {Nominatim} from "./nominatim";
import {FEATURE_SRC} from "../konstants";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";


class Geocoder extends Control{
    options
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
        const options = opt_options || {};

        const $html = new Html(options);
        const container = $html.els.container
        super({
            element: container,
        });
        options["featureStyle"] = new Style({ image: new Icon({ scale: 0.7, src: FEATURE_SRC }) })
        this.options = options
        this.map = options.map
        const $nominatim = new Nominatim(this, $html.els);
        this.layer = $nominatim.layer;
    }

    /**
     * @return {ol.layer.Vector} Returns the layer created by this control
     */
    getLayer() {
        return this.layer;
    }

    /**
     * @return {ol.source.Vector} Returns the source created by this control
     */
    getSource() {
        return this.getLayer().getSource();
    }

    /**
     * Set a new provider
     * @param {String} provider
     */
    setProvider(provider) {
        this.options.provider = provider;
    }

    /**
     * Set provider key
     * @param {String} key
     */
    setProviderKey(key) {
        this.options.key = key;
    }
    getProvider(){
        return this.options.provider
    }
}

export default  Geocoder
