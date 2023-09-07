import { env } from '@/main/config/env';
import { AwsS3FileStorage } from '@/infra/gateways';

export const makeAwsS3FileStorage = (): AwsS3FileStorage => {
  return new AwsS3FileStorage(
    env.s3.accessKeyId,
    env.s3.secretAccessKey,
    env.s3.bucket
  );
};
