import {
  IGoogleService,
  ITranslateRepository,
  ITranslateUseCase
} from '../contracts/translation';
import { TranslateUseCase } from '@/domain/contracts';

export class TranslateService implements ITranslateUseCase {
  constructor(
    private readonly repository: ITranslateRepository,
    private readonly googleService: IGoogleService
  ) {}
  async translate(input: TranslateUseCase.Params) {
    const oldTrans = await this.repository.getTranslation(input);
    if (oldTrans) return oldTrans;
    const newTrans = await this.googleService.translate(input);
    if (!newTrans) throw new Error();
    this.repository.insertTranslation(newTrans);
    return newTrans;
  }
  async fetchHistories(ids: string[]) {
    return await this.repository.findHistories(ids);
  }
}
