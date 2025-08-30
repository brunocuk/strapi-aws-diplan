module.exports = ({ env }) => {
  console.log('=== PLUGIN CONFIG DEBUG ===');
  console.log('AWS_ACCESS_KEY_ID:', env('AWS_ACCESS_KEY_ID') ? 'SET' : 'NOT SET');
  console.log('AWS_SECRET_ACCESS_KEY:', env('AWS_SECRET_ACCESS_KEY') ? 'SET' : 'NOT SET');
  console.log('AWS_REGION:', env('AWS_REGION'));
  console.log('AWS_S3_BUCKET:', env('AWS_S3_BUCKET'));
  console.log('=== END DEBUG ===');

  return {
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          s3Options: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
            region: env('AWS_REGION'),
            params: {
              Bucket: env('AWS_S3_BUCKET'),
              ACL: 'public-read',
            },
          },
        },
      },
    },
  };
};