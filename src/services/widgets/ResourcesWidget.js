'use strict';

const contrib = require('blessed-contrib');

module.exports = class ResourcesWidget {
    constructor(smurfService, screenService, layoutProvider) {
        smurfService.smurf.getLoaderData('PSILoader')
            .then((data) => {
                var bar = screenService.grid.set(...layoutProvider.get('ResourcesWidget'), contrib.bar,
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
    }
};
