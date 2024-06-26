export type LanguagesType =
  | 'en'
  | 'ru'
  | 'zh'
  | 'ko'
  | 'ja'
  | 'fr'
  | 'de'
  | 'id'
  | 'pl'
  | 'es'
  | 'ka'
  | 'ar'
  | 'hy'
  | 'hi'
  | 'it';

export type TranslationsValuesType = {
  passwordLength: string;
  includeSymbols: string;
  includeNumbers: string;
  includeLowercaseCharacters: string;
  includeUppercaseCharacters: string;
  excludeSimilarCharacters: string;
  excludeAmbiguousCharacters: string;
  generate: string;
  saveMySettings: string;
};

export type TranslationsType = Record<
  LanguagesType,
  TranslationsValuesType
>;
