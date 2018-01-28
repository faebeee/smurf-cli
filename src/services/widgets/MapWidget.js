'use strict';

const contrib = require('blessed-contrib');

module.exports = class MapWidget {
    constructor(smurfService, screenService, layoutProvider) {
        smurfService.smurf.getLoaderData('GeoIPLoader')
            .then((data) => {
                var map = screenService.grid.set(...layoutProvider.get('MapWidget'), contrib.map,
                    {
                        label: 'Geo'
                    });

                for (let i = 0; i < data.data.length; i++) {
                    const marker = data.data[i];
                    map.addMarker({"lon": marker.lon, "lat": marker.lat, color: "red", char: "X"})
                }
            });
    }
};
