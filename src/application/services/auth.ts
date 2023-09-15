import {
  BadRequestError,
  ForbiddenError,
  UnauthorizedError
} from '@/application/errors';
import { AuthenticationUseCase } from '@/domain/use-cases';
import {
  Encrypt,
  Hash,
  HashCompare,
  KeyTokenRepository,
  ShopRepository,
  Decrypt,
  Crypto
} from '@/domain/contracts';
import { KeyToken } from '@/domain/entities';

export enum RoleShop {
  SHOP = '0000',
  WRITER = '0001',
  EDITOR = '0002',
  ADMIN = '0003'
}
export class AuthService implements AuthenticationUseCase {
  constructor(
    private readonly shopRepository: ShopRepository,
    private readonly hashPassword: Hash,
    private readonly crypto: Crypto,
    private readonly keyTokenRepository: KeyTokenRepository,
    private readonly encryptToken: Encrypt,
    private readonly decryptToken: Decrypt,
    private readonly hashComparePassword: HashCompare
  ) {}

  async signup(
    input: AuthenticationUseCase.Params
  ): Promise<AuthenticationUseCase.Result> {
    const { name, email, password } = input;
    const holderShop = await this.shopRepository.findByEmail(email);
    if (holderShop) {
      throw new BadRequestError('Error: Shop already exists');
    }
    const passwordHash = await this.hashPassword.hash(password);
    const newShop = await this.shopRepository.create({
      name,
      email,
      password: passwordHash,
      roles: [RoleShop.SHOP]
    });
    if (newShop) {
      const publicKey = await this.crypto.create();
      const privateKey = await this.crypto.create();
      console.log({ publicKey, privateKey });
      const keyStore = await this.keyTokenRepository.createKeyToken({
        userId: newShop.id ?? 'null',
        publicKey,
        privateKey
      });
      if (!keyStore) throw new BadRequestError('Public key error');
      const tokens = await this.createTokenPair(
        {
          userId: newShop.id,
          email
        },
        publicKey,
        privateKey
      );
      return {
        shop: newShop,
        accessToken: tokens?.accessToken,
        refreshToken: tokens?.refreshToken
      };
    }
    return null;
  }
  async login(
    email: string,
    password: string
  ): Promise<AuthenticationUseCase.Result> {
    const foundShop = await this.shopRepository.findByEmail(email);
    if (!foundShop) throw new BadRequestError('Shop not registered');
    const matchPassword = await this.hashComparePassword.compare(
      password,
      foundShop.password
    );
    if (!matchPassword) throw new UnauthorizedError('Unauthorized error');
    const publicKey = await this.crypto.create();
    const privateKey = await this.crypto.create();
    const tokens = await this.createTokenPair(
      {
        userId: foundShop.id,
        email: email
      },
      publicKey,
      privateKey
    );
    return {
      shop: foundShop,
      accessToken: tokens?.accessToken,
      refreshToken: tokens?.refreshToken
    };
  }
  async logout(keyStore: KeyToken): Promise<boolean> {
    return await this.keyTokenRepository.removeKeyById(keyStore?.id);
  }
  async handleRefreshToken(
    input: AuthenticationUseCase.ParamsHandleRT
  ): Promise<AuthenticationUseCase.ResultHandleRT> {
    const { userId, email, keyStore, refreshToken } = input;
    if (keyStore.refreshTokensUsed?.includes(refreshToken)) {
      await this.keyTokenRepository.deletedKeyById(userId);
      throw new ForbiddenError('Something wrong happened! Please login again');
    }
    if (keyStore.refreshToken !== refreshToken)
      throw new UnauthorizedError('Shop not registered!');
    const foundShop = await this.shopRepository.findByEmail(email);
    if (!foundShop)
      throw new UnauthorizedError('Shop not registered! Please login again');
    const tokens = await this.createTokenPair(
      {
        userId,
        email
      },
      keyStore.publicKey,
      keyStore.privateKey
    );
    return {
      shop: foundShop,
      accessToken: tokens?.accessToken,
      refreshToken: tokens?.refreshToken
    };
  }
  private async createTokenPair(
    payload: any,
    publicKey: string,
    privateKey: string
  ) {
    try {
      const accessToken = await this.encryptToken.encrypt(payload, publicKey, {
        expiresIn: '2 days'
      });
      const refreshToken = await this.encryptToken.encrypt(
        payload,
        privateKey,
        {
          expiresIn: '7 days'
        }
      );
      this.decryptToken.decrypt(accessToken, publicKey);
      return { accessToken, refreshToken };
    } catch (error) {
      console.log(error);
    }
  }
}
