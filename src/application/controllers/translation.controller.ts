import { Controller } from '@/application/controllers';
import { HttpResponse, unauthorized, ok } from '@/application/helpers';
import {
  ValidationBuilder as Builder,
  Validator
} from '@/application/validation';
import { TranslateService } from '@/domain/use-cases';

type HttpRequest = {
  originalText: string;
  sources: string;
  destination: string;
};
type Model =
  | Error
  | {
      originalText: string;
      sources: string;
      destination: string;
      resultText: string;
    };

export class FacebookLoginController extends Controller {
  constructor(private readonly service: TranslateService) {
    super();
  }

  async perform({
    originalText,
    sources,
    destination
  }: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const accessToken = await this.service.translate({ token });
      return ok(accessToken);
    } catch (error) {
      if (error instanceof AuthenticationError) return unauthorized();
      throw error;
    }
  }

  override buildValidators({ token }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: token, fieldName: 'token' }).required().build()
    ];
  }
}
