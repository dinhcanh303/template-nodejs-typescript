import { Controller } from '@/application/controllers';
import { HttpResponse, ok } from '@/application/helpers';
import { ApiKey } from '@/domain/entities';
import { ApiKeyService } from '@/domain/services';
export namespace ApiKeyController {
  export type Model = Error | ApiKey;
  export type HttpRequest = { key: string };
}
export class FindApiKeyController extends Controller {
  constructor(private readonly service: ApiKeyService) {
    super();
  }
  async perform({
    key
  }: ApiKeyController.HttpRequest): Promise<
    HttpResponse<ApiKeyController.Model>
  > {
    const newApiKey = await this.service.findById(key);
    return ok(newApiKey);
  }
}
