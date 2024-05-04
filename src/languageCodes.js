/*
 * A separate file "languageCodes" with the constant "LANGUAGE_CODES" is needed,
 * since language codes are used in js files "next.config.js" in addition to ts files
 * */
const LANGUAGE_CODES = {
  EN: 'en',
  RU: 'ru',
  ZH: 'zh',
  KO: 'ko',
  JA: 'ja',
  FR: 'fr',
  DE: 'de',
  ID: 'id',
  PL: 'pl',
  ES: 'es',
  KA: 'ka',
  AR: 'ar',
  HY: 'hy',
  HI: 'hi',
  IT: 'it',
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  LANGUAGE_CODES,
};
