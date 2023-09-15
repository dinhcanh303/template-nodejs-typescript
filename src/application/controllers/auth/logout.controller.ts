import { Controller } from '@/application/controllers';
import { HttpResponse, ok } from '@/application/helpers';
import { KeyToken } from '@/domain/entities';
import { AuthenticationUseCase } from '@/domain/use-cases';
export namespace LogoutController {
  export type Model = Error | boolean;
  export type HttpRequestLogout = { keyStore: KeyToken };
}
export class LogoutController extends Controller {
  constructor(private readonly service: AuthenticationUseCase) {
    super();
  }
  async perform({
    keyStore
  }: LogoutController.HttpRequestLogout): Promise<
    HttpResponse<LogoutController.Model>
  > {
    console.log(keyStore);
    const logout = await this.service.logout(keyStore);
    return ok(logout);
  }
}
