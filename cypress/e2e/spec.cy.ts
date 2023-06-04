// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

import chaiColors from 'chai-colors';
import {
  checkDarkTheme,
  checkLightTheme,
} from './spec.helpers';
import { Elements } from './spec.data';
import { Translations } from '../../src/hooks/useTranslate/useTranslate.data';

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

  it('Change language', () => {
    cy.visit('http://localhost:3001');

    cy.get('[data-testid="SelectFieldContent"]')
      .first()
      .click();

    cy.get(
      '[data-testid="DropDownContainer"] [role="option"]',
    )
      .eq(2)
      .click();

    cy.get(Elements.FormItemContainerLeftCol)
      .eq(0)
      .should(
        'contain.text',
        Translations.zh.passwordLength,
      );
  });
});
