const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, screen) {
    return smurf.getLoaderData('PSILoader')
        .then((data) => {
            var bar = grid.set(0, 1, 1, 1, contrib.bar,
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
                        'numberCssResources',
                        'numberStaticResources',
                        'numberJsResources',
                    ]
                    , data: [
                        data.data.pageStats.numberCssResources,
                        data.data.pageStats.numberStaticResources,
                        data.data.pageStats.numberJsResources,
                    ]
                });


        })
};
