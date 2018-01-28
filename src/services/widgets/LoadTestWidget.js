'use strict';

const contrib = require('blessed-contrib');

module.exports = class LoadTestWidget {
    constructor(smurfService, screenService, layoutProvider) {
        this.smurfService = smurfService;
        this.line = screenService.grid.set(...layoutProvider.get('LoadTestWidget'), contrib.line,
            {
                style:
                    {
                        line: "yellow"
                        , text: "green"
                        , baseline: "black"
                    }
                , xLabelPadding: 3
                , xPadding: 5
                , showLegend: false
                , wholeNumbersOnly: true//true=do not show fraction in y axis
                , label: 'Loadtest'
            });

        setInterval(() => {
            this.update();
        }, 1000)
    }

    update() {
        this.smurfService.smurf.getLoaderData('LoadTestLoader')
            .then((data) => {
                var meanLatencyMs = {
                    title: 'mean',
                    x: Object.keys(data.data.meanLatencyMs),
                    y: data.data.meanLatencyMs
                };

                this.line.setData([meanLatencyMs])
            });
    }
};
