export type KeyToken = {
  id?: string;
  userId: string;
  publicKey: string;
  privateKey: string;
  refreshToken?: string;
  refreshTokensUsed?: string;
  createAt?: Date;
  updatedAt?: Date;
};
