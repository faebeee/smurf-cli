const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, layout) {
    return smurf.getLoaderData('PSILoader')
        .then((data) => {
            var gauge = grid.set(...layout, contrib.gauge,
                {
                    label: 'Speed'
                });

            gauge.setPercent(data.data.ruleGroups.SPEED.score)
        })
};
