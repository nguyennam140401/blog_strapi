const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { seo } = ctx.params;

    const entity = await strapi.services.post.findOne({ seo });
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};
