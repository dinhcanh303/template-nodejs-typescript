import { Controller } from '@/application/controllers';
import { HttpResponse, badRequest, ok } from '@/application/helpers';
import { ApiKeyService } from '@/domain/services';
import { ApiKeyController } from './find-api-key.controller';

export class CreateApiKeyController extends Controller {
  constructor(private readonly service: ApiKeyService) {
    super();
  }
  async perform(): Promise<HttpResponse<ApiKeyController.Model>> {
    const newApiKey = await this.service.create();
    return ok(newApiKey);
  }
}
