export default {
  register(/* { strapi } */) {
    // Registration logic
  },

  async bootstrap({ strapi }) {
    console.log('=== BOOTSTRAP DIRECT S3 CONFIG ===');
    
    if (process.env.AWS_ACCESS_KEY_ID && process.env.AWS_BUCKET) {
      // Directly configure the upload plugin
      const uploadPlugin = strapi.plugin('upload');
      
      if (uploadPlugin) {
        uploadPlugin.config = {
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
        };
        
        console.log('Direct S3 configuration applied to upload plugin');
      }
    }
    console.log('=== END BOOTSTRAP DIRECT CONFIG ===');
  },
};