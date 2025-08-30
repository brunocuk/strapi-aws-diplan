export default {
  register(/* { strapi } */) {
    // Registration logic if needed
  },

  bootstrap({ strapi }) {
    // Configure S3 upload after Strapi initializes
    console.log('=== BOOTSTRAP S3 CONFIG ===');
    console.log('AWS_ACCESS_KEY_ID available:', process.env.AWS_ACCESS_KEY_ID ? 'YES' : 'NO');
    console.log('AWS_BUCKET available:', process.env.AWS_BUCKET ? 'YES' : 'NO');
    
    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_BUCKET) {
      // Override the upload plugin configuration
      strapi.config.set('plugin::upload', {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
            params: {
              Bucket: process.env.AWS_BUCKET,
              ACL: 'public-read',
            },
          },
        },
      });
      
      console.log('S3 upload configuration applied');
    } else {
      console.log('AWS environment variables missing, using default upload');
    }
    console.log('=== END BOOTSTRAP CONFIG ===');
  },
};