'use strict';

const contrib = require('blessed-contrib');

module.exports = class FMPWidget {
    constructor(smurfService, screenService, layoutProvider) {
        smurfService.smurf.getLoaderData('LightHouseLoader')
        .then((data) => {
            const bar = screenService.grid.set(...layoutProvider.get('FMPWidget'), contrib.bar, {
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
    }
};
