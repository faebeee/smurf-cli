'use strict';

const contrib = require('blessed-contrib');

module.exports = class ResponseBytesWidget {
    constructor(smurfService, screenService, layoutProvider) {
        smurfService.smurf.getLoaderData('PSILoader')
            .then((data) => {
                var bar = screenService.grid.set(...layoutProvider.get('ResponseBytesWidget'), contrib.bar,
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
            });
    }
};
