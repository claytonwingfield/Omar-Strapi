'use strict';

/**
 * psycho-world service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::psycho-world.psycho-world');
