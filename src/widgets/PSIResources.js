const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, layout) {
    return smurf.getLoaderData('PSILoader')
        .then((data) => {
            var bar = grid.set(...layout, contrib.bar,
                {
                    barWidth: 4
                    , barSpacing: 6
                    , xOffset: 0
                    , maxHeight: 9
                    , xPadding: 5,
                    label: 'Resources'
                });


            bar.setData(
                {
                    titles: [
                        'CSS',
                        'STCT',
                        'JS',
                    ]
                    , data: [
                        data.data.pageStats.numberCssResources,
                        data.data.pageStats.numberStaticResources,
                        data.data.pageStats.numberJsResources,
                    ]
                });


        })
};
