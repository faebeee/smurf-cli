const contrib = require('blessed-contrib');


module.exports = function (smurf, grid, screen) {
    return smurf.getLoaderData('PSILoader')
        .then((data) => {
            var gauge = grid.set(0, 2, 1, 1, contrib.gauge,
                {
                    label: 'Speed'
                });

            gauge.setPercent(data.data.ruleGroups.SPEED.score)
        })
};
