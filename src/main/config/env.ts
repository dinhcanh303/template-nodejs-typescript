export const env = {
  s3: {
    url: process.env.AWS_S3_URL ?? '',
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY ?? '',
    bucket: process.env.AWS_S3_BUCKET ?? '',
    endPoint: process.env.AWS_S3_ENDPOINT ?? ''
  },
  mail: {
    mailer: process.env.MAIL_MAILER ?? 'log',
    host: process.env.MAIL_HOST ?? 'smtp',
    prot: process.env.MAIL_PORT ?? 587,
    username: process.env.MAIL_USERNAME ?? 'info@gmail.com',
    password: process.env.MAIL_PASSWORD ?? '********',
    encryption: process.env.MAIL_ENCRYPTION ?? 'tls',
    fromAddress: process.env.MAIL_FROM_ADDRESS ?? 'info@gmail.com',
    fromName: process.env.MAIL_FROM_NAME ?? 'nodejs'
  },
  redis: {
    client: process.env.REDIS_CLIENT ?? 'redis',
    host: process.env.REDIS_HOST ?? 'redis',
    port: process.env.REDIS_PORT ?? '6379',
    password: process.env.REDIS_PASSWORD ?? ''
  },
  db: {
    connection: process.env.DB_CONNECTION ?? 'mysql',
    host: process.env.DB_HOST ?? '127.0.0.1',
    port: process.env.DB_PORT ?? '3306',
    database: process.env.DB_DATABASE ?? 'nodejs',
    username: process.env.DB_USERNAME ?? 'username',
    password: process.env.DB_PASSWORD ?? 'password'
  },
  port: process.env.APP_PORT ?? 8080,
  environment: process.env.APP_ENV ?? 'dev',
  appName: process.env.APP_NAME ?? 'nodejs',
  jwtSecret: process.env.JWT_SECRET ?? 'jk43h5jk43h5k34',
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '',
    accessToken: process.env.FB_ACCESS_TOKEN ?? ''
  }
};
