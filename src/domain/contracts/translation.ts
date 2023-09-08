import { TranslationType } from '@/domain/entities';
export interface ITranslateUseCase {
  translate: (
    input: TranslateUseCase.Params
  ) => Promise<TranslateUseCase.Result>;
  fetchHistories: (ids: string[]) => Promise<TranslateUseCase.Result[]>;
}
export namespace TranslateUseCase {
  export type Params = {
    originalText: string;
    sources: string;
    destination: string;
  };
  export type Result = TranslationType;
}
export interface ITranslateRepository {
  getTranslation: (
    input: TranslateUseCase.Params
  ) => Promise<TranslateUseCase.Result>;
  findHistories: (ids: string[]) => Promise<TranslateUseCase.Result[]>;
  insertTranslation: (translation: TranslateUseCase.Result) => Promise<void>;
}
export interface IGoogleService {
  translate: (
    input: TranslateUseCase.Params
  ) => Promise<TranslateUseCase.Result>;
}
