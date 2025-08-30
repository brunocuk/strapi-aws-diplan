export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  const config = {
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

  console.log('=== PLUGIN CONFIG ===');
  console.log('Upload provider:', config.upload.config.provider);
  console.log('S3 Bucket:', config.upload.config.providerOptions.s3Options.params.Bucket);
  console.log('S3 Region:', config.upload.config.providerOptions.s3Options.region);
  console.log('S3 Access Key (first 10 chars):', config.upload.config.providerOptions.s3Options.accessKeyId?.substring(0, 10));
  console.log('=== END PLUGIN CONFIG ===');

  return config;
};