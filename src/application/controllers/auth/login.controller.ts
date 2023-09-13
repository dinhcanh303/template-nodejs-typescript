import { Controller } from '@/application/controllers';
import { HttpResponse, ok } from '@/application/helpers';
import { AuthenticationUseCase } from '@/domain/use-cases';
export namespace AuthController {
  export type Model = Error | AuthenticationUseCase.Result;
  export type HttpRequestLogin = { email: string; password: string };
}
export class CreateApiKeyController extends Controller {
  constructor(private readonly service: AuthenticationUseCase) {
    super();
  }
  async perform({
    email,
    password
  }: AuthController.HttpRequestLogin): Promise<
    HttpResponse<AuthController.Model>
  > {
    const newShop = await this.service.login(email, password);
    return ok(newShop);
  }
}
