import { badRequest, HttpResponse, serverError } from '@/application/helpers';
import { ValidationComposite, Validator } from '@/application/validation';
import { ServerError } from '../errors';
export abstract class Controller {
  buildValidators(httpRequest: any): Validator[] {
    return [];
  }
  abstract perform(httpRequest: any): Promise<HttpResponse>;
  async handle(httpRequest: any): Promise<HttpResponse> {
    const error = this.validate(httpRequest);
    if (error !== undefined) return badRequest();
    return await this.perform(httpRequest);
  }
  private validate(httpRequest: any): Error | undefined {
    const validators = this.buildValidators(httpRequest);
    return new ValidationComposite(validators).validate();
  }
}
