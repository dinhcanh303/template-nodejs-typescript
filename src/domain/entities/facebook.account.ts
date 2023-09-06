type FaceBookData = { name: string; email: string; facebookId: string };
type AccountData = { id?: string; name?: string };
export class FacebookAccount {
  id?: string;
  name: string;
  email: string;
  facebookId: string;
  constructor(fbData: FaceBookData, accountData?: AccountData) {
    this.id = accountData?.id;
    this.name = accountData?.name ?? fbData.name;
    this.email = fbData.email;
    this.facebookId = fbData.facebookId;
  }
}
