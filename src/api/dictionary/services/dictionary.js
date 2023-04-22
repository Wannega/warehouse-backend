"use strict";


async function findMany(fields) {
  return await strapi.db.query("api::dictionary.dictionary").findMany({
    where: {
      fields,
      name: {
        $contains: fields.name,
      },
    },
  });
}

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::dictionary.dictionary");
