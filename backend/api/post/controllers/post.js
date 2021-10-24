const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

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
  async create(ctx) {
    let entity;

    ctx.request.body.seo = ctx.request.body.title.trim().replace(/ /g, "-");
    console.log(ctx.request.body);
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.author = ctx.state.user.id;
      entity = await strapi.services.post.create(data, { files });
    } else {
      ctx.request.body.author = ctx.state.user.id;
      entity = await strapi.services.post.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.post });
  },
  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const [post] = await strapi.services.post.find({
      id: ctx.params.id,
      "author.id": ctx.state.user.id,
    });
    // const p = await strapi.services.post.find({ id: id ,'author.id': ctx.stat});
    // console.log(p);
    if (!post) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.post.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.post.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.post });
  },
  async delete(ctx) {
    const { id } = ctx.params;

    let entity;

    const [post] = await strapi.services.post.find({
      id: ctx.params.id,
      "author.id": ctx.state.user.id,
    });

    if (!post) {
      return ctx.unauthorized(`You can't delete this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.post.delete({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.post.delete({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.post });
  },
};
