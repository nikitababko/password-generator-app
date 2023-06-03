// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import chaiColors from 'chai-colors';
import {
  checkDarkTheme,
  checkLightTheme,
} from './spec.helpers';

chai.use(chaiColors);

describe('Password generator', () => {
  it('Toggle theme', () => {
    cy.visit('http://localhost:3001');

    checkLightTheme();

    cy.get('[role="switch"]').first().click();
    checkDarkTheme();

    cy.get('[role="switch"]').first().click();
    checkLightTheme();
  });
});
