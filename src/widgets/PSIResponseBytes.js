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
                    label: 'ResponseBytes'
                });


            bar.setData(
                {
                    titles: [
                        'CSS',
                        'IMG',
                        'HTML',
                        'JS',
                    ]
                    , data: [
                        Math.round(data.data.pageStats.cssResponseBytes / 1024),
                        Math.round(data.data.pageStats.imageResponseBytes / 1024),
                        Math.round(data.data.pageStats.htmlResponseBytes / 1024),
                        Math.round(data.data.pageStats.javascriptResponseBytes / 1024),
                    ]
                });


        })
};
