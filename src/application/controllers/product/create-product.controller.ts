import { Controller } from '@/application/controllers';
import { HttpResponse, ok } from '@/application/helpers';
import { ProductUseCase } from '@/domain/use-cases';

export namespace CreateProductController {
  export type Model = Error | ProductUseCase.Result;
  export type HttpRequestCreate = ProductUseCase.Params;
}
export class CreateProductController extends Controller {
  constructor(private readonly productService: ProductUseCase) {
    super();
  }
  async perform(
    input: CreateProductController.HttpRequestCreate
  ): Promise<HttpResponse<CreateProductController.Model>> {
    const data = await this.productService.create(input);
    return ok(data);
  }
}
