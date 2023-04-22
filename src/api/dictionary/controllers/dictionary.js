"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::dictionary.dictionary",
  ({ strapi }) => ({
    async findMany(ctx) {
        
      return await strapi.service.findMany(ctx.query.filters);
    },
  })
);
