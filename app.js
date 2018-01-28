#! /usr/bin/env node

'use strict';
const argv = require('yargs').argv;

const URL = argv.url;

const ServiceContainer = require('servicecontainer');
const container = ServiceContainer.create(__dirname + '/config/services.json');

container.get('smurf')
    .start(URL)
    .then(() => {
        container.getServicesByTag('widget');
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    });
