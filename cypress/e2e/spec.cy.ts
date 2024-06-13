import chaiColors from 'chai-colors';

import { Elements, TEST_URL } from './spec.data';
import {
  checkDarkTheme,
  checkLightTheme,
} from './spec.helpers';
import { Translations } from '../../src/hooks/useTranslate/useTranslate.data';
import type { LanguagesType } from '../../src/hooks/useTranslate/useTranslate.types';

chai.use(chaiColors);

describe('Password generator', () => {
  it('Toggle theme', () => {
    cy.visit(TEST_URL);

    checkLightTheme();

    cy.get(Elements.ThemeToggle).click();
    checkDarkTheme();

    cy.get(Elements.ThemeToggle).click();
    checkLightTheme();
  });

  it('Change language', () => {
    cy.visit(TEST_URL);

    /* eslint-disable unicorn/no-array-for-each */
    Object.keys(Translations).forEach((key, index) => {
      const translation =
        Translations[key as LanguagesType];
      cy.get(Elements.SelectFieldContent).first().click();

      cy.get(
        `${Elements.SelectFieldIDropDownContainer} ${Elements.SelectFieldItemContainer}`,
      )
        .eq(index)
        .click();

      cy.get(Elements.FormItemContainerLeftCol)
        .eq(0)
        .should('contain.text', translation.passwordLength);

      cy.get(Elements.FormItemContainerLeftCol)
        .eq(1)
        .should('contain.text', translation.includeSymbols);

      cy.get(Elements.FormItemContainerLeftCol)
        .eq(2)
        .should('contain.text', translation.includeNumbers);

      cy.get(Elements.FormItemContainerLeftCol)
        .eq(3)
        .should(
          'contain.text',
          translation.includeLowercaseCharacters,
        );

      cy.get(Elements.FormItemContainerLeftCol)
        .eq(4)
        .should(
          'contain.text',
          translation.includeUppercaseCharacters,
        );

      cy.get(Elements.FormItemContainerLeftCol)
        .eq(5)
        .should(
          'contain.text',
          translation.excludeSimilarCharacters,
        );

      cy.get(Elements.FormItemContainerLeftCol)
        .eq(6)
        .should(
          'contain.text',
          translation.excludeAmbiguousCharacters,
        );
    });
  });

  it('Select password length', () => {
    cy.visit(TEST_URL);

    cy.get(Elements.NumberFieldInput).should(
      'have.value',
      '6',
    );

    cy.get(Elements.NumberFieldArrowUp).click();

    cy.get(Elements.NumberFieldInput).should(
      'have.value',
      '7',
    );

    cy.get(Elements.NumberFieldArrowDown).dblclick();

    cy.get(Elements.NumberFieldInput).should(
      'have.value',
      '5',
    );

    cy.get(Elements.NumberFieldInput).type('{backspace}15');

    cy.get(Elements.NumberFieldInput).should(
      'have.value',
      '15',
    );
  });
});
