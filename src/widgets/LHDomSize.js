const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, layout) {
    return smurf.getLoaderData('LightHouseLoader')
        .then((data) => {
            const bar = grid.set(...layout, contrib.bar, {
                label: 'Dom Size'
                , barWidth: 4
                , barSpacing: 6
                , xOffset: 0
                , maxHeight: 9
            });
            const {rawValue} = data.data['dom-size'];
            bar.setData(
                {
                    titles: ['Nodes'],
                    data: [rawValue]
                })

        });
};
