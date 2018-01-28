'use strict';

const contrib = require('blessed-contrib');

module.exports = class PSISpeedWidget {
    constructor(smurfService, screenService, layoutProvider) {
        smurfService.smurf.getLoaderData('PSILoader')
            .then((data) => {
                var gauge = screenService.grid.set(...layoutProvider.get('PSISpeedWidget'), contrib.gauge,
                    {
                        label: 'Speed'
                    });

                gauge.setPercent(data.data.ruleGroups.SPEED.score)
            })
    }
};
