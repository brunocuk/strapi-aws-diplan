export default ({ env }) => {
  // Configure upload plugin at server startup
  const uploadConfig = {
    provider: 'aws-s3',
    providerOptions: {
      s3Options: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
          ACL: 'public-read',
        },
      },
    },
  };

  // Set the upload configuration
  if (global.strapi) {
    global.strapi.config.set('plugin.upload', uploadConfig);
  }

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};