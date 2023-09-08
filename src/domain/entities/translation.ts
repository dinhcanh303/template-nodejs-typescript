export type TranslationType = {
  originalText: string;
  sources: string;
  destination: string;
  resultText: string;
};
export class Translation {
  originalText: string;
  sources: string;
  destination: string;
  resultText: string;
  constructor(translationData: TranslationType) {
    this.originalText = translationData.originalText;
    this.sources = translationData.sources;
    this.destination = translationData.destination;
    this.resultText = translationData.resultText;
  }
  setResultText(s: string) {
    this.resultText = s;
  }
}
