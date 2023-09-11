export type ApiKey = {
  id?: string;
  key: string;
  status?: boolean;
  permissions: Array<string>;
  createdAt?: Date;
  updatedAt?: Date;
};
