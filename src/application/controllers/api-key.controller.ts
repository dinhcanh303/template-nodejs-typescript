import { Controller } from '@/application/controllers';
import { HttpResponse, ok, badRequest } from '@/application/helpers';
import { IApiKey } from '@/domain/contracts';
import { ApiKeyModel } from '@/domain/entities';

type Model = Error | ApiKeyModel;

export class ApiKeyController extends Controller {
  constructor(private readonly apiKey: IApiKey) {
    super();
  }

  async perform(): Promise<HttpResponse<Model>> {
    try {
      const apiKey = await this.apiKey.createApiKey();
      return ok(apiKey);
    } catch (error) {
      if (error) return badRequest(error as Error);
      throw error;
    }
  }
}
