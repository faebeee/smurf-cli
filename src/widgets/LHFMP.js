const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, layout) {
    return smurf.getLoaderData('LightHouseLoader')
        .then((data) => {
            const bar = grid.set(...layout, contrib.bar, {
                label: 'First Meaningful Paint'
                , barWidth: 4
                , barSpacing: 6
                , xOffset: 0
                , maxHeight: 9
            });
            const {rawValue} = data.data['first-meaningful-paint'];
            bar.setData(
                {
                    titles: ['FMP'],
                    data: [rawValue]
                })

        });
};
