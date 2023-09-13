import { Controller } from '@/application/controllers';
import { HttpResponse, badRequest, ok } from '@/application/helpers';
import { ApiKeyController } from './find-api-key.controller';
import { ApiKeyUseCase } from '@/domain/use-cases';

export class CreateApiKeyController extends Controller {
  constructor(private readonly service: ApiKeyUseCase) {
    super();
  }
  async perform(): Promise<HttpResponse<ApiKeyController.Model>> {
    const newApiKey = await this.service.create();
    return ok(newApiKey);
  }
}
