const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, layout) {
    return smurf.getLoaderData('GeoIPLoader')
        .then((data) => {
            var map = grid.set(...layout, contrib.map,
                {
                    label: 'Geo'
                });



            for(let i = 0; i < data.data.length; i++){
                const marker = data.data[i];
            map.addMarker({"lon": marker.lon, "lat": marker.lat, color: "red", char: "X"})

            }

        })
};
