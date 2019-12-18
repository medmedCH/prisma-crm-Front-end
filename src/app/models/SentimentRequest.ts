import {LanguageCode} from './LanguageCode';

export interface SentimentRequest {
  documents: {
    language: LanguageCode;
    id: number;
    text: string;
  }[];
}
