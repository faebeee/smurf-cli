'use strict';

const contrib = require('blessed-contrib');

module.exports = class DomSizeWidget {
    constructor(smurfService, screenService, layoutProvider) {
        smurfService.smurf.getLoaderData('LightHouseLoader')
            .then((data) => {
                const bar = screenService.grid.set(...layoutProvider.get('DomSizeWidget'), contrib.bar, {
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
    }
};
