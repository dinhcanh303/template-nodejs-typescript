import { Controller } from '@/application/controllers';
import { HttpResponse, ok } from '@/application/helpers';
import { AuthenticationUseCase } from '@/domain/use-cases';
export namespace SignupController {
  export type Model = Error | AuthenticationUseCase.Result;
  export type HttpRequestSignup = { input: AuthenticationUseCase.Params };
}
export class SignupController extends Controller {
  constructor(private readonly service: AuthenticationUseCase) {
    super();
  }
  async perform({
    input
  }: SignupController.HttpRequestSignup): Promise<
    HttpResponse<SignupController.Model>
  > {
    const data = await this.service.signup(input);
    return ok(data);
  }
}
