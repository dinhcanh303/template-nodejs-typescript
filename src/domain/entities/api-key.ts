export type ApiKeyModel = {
  id?: string;
  key: string;
  status?: boolean;
  permission: Array<string>;
  createdAt?: Date;
  updatedAt?: Date;
};
