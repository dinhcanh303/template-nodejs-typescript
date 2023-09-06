type Input = {
  token: string;
};
type Output = {
  accessToken: string;
};
export type FacebookAuthentication = (input: Input) => Promise<Output>;
