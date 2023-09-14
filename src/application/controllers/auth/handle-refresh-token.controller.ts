import { Controller } from '@/application/controllers';
import { HttpResponse, ok } from '@/application/helpers';
import { AuthenticationUseCase } from '@/domain/use-cases';
export namespace HandleRefreshTokenController {
  export type Model = Error | AuthenticationUseCase.Result;
  export type HttpRequestHandleRefreshToken = {
    input: AuthenticationUseCase.ParamsHandleRT;
  };
}
export class HandleRefreshTokenController extends Controller {
  constructor(private readonly service: AuthenticationUseCase) {
    super();
  }
  async perform({
    input
  }: HandleRefreshTokenController.HttpRequestHandleRefreshToken): Promise<
    HttpResponse<HandleRefreshTokenController.Model>
  > {
    const data = await this.service.handleRefreshToken(input);
    return ok(data);
  }
}
