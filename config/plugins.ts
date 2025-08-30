export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  console.log('=== ENVIRONMENT DEBUG ===');
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('All process.env keys containing AWS:', Object.keys(process.env).filter(key => key.includes('AWS')));
  console.log('Raw process.env.AWS_ACCESS_KEY_ID:', process.env.AWS_ACCESS_KEY_ID);
  console.log('Raw process.env.AWS_SECRET_ACCESS_KEY:', process.env.AWS_SECRET_ACCESS_KEY ? 'EXISTS' : 'NOT EXISTS');
  console.log('env() function test:', env('NODE_ENV'));
  console.log('=== END ENVIRONMENT DEBUG ===');

  console.log('=== PLUGIN CONFIG DEBUG ===');
  console.log('AWS_ACCESS_KEY_ID:', env('AWS_ACCESS_KEY_ID') ? 'SET' : 'NOT SET');
  console.log('AWS_SECRET_ACCESS_KEY:', env('AWS_SECRET_ACCESS_KEY') ? 'SET' : 'NOT SET');
  console.log('AWS_REGION:', env('AWS_REGION'));
  console.log('AWS_BUCKET:', env('AWS_BUCKET')); // Using AWS_BUCKET to match your Strapi Cloud config
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
              Bucket: env('AWS_BUCKET'),
              ACL: 'public-read',
            },
          },
        },
      },
    },
  };
};