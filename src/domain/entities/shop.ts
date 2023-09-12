export type Shop = {
  id?: string;
  name: string;
  email: string;
  password: string;
  status?: string;
  verify?: boolean;
  roles?: Array<string>;
  createdAt?: Date;
  updatedAt?: Date;
};
