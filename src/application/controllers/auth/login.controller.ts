import { Controller } from '@/application/controllers';
import { HttpResponse, ok } from '@/application/helpers';
import { AuthenticationUseCase } from '@/domain/use-cases';
export namespace LoginController {
  export type Model = Error | AuthenticationUseCase.Result;
  export type HttpRequestLogin = { email: string; password: string };
}
export class LoginController extends Controller {
  constructor(private readonly service: AuthenticationUseCase) {
    super();
  }
  async perform({
    email,
    password
  }: LoginController.HttpRequestLogin): Promise<
    HttpResponse<LoginController.Model>
  > {
    const data = await this.service.login(email, password);
    return ok(data);
  }
}
