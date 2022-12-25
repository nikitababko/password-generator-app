import type { UserConfig } from '@commitlint/types';

import cz from './commitizen.config.json';

const ruleLevel = 2;

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [ruleLevel, 'always', cz.scopes.map((type) => type.name)],
  },
};

export default Configuration;
