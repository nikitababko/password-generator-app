import chaiColors from 'chai-colors';

import { Translations } from '../../src/hooks/useTranslate/useTranslate.data';
import { FORM_ITEMS_INITIAL_STATE } from '../../src/store/store.data';

import { Elements, TEST_URL } from './spec.data';
import {
  checkDarkTheme,
  checkLightTheme,
} from './spec.helpers';
import type { LanguagesType } from '../../src/hooks/useTranslate/useTranslate.types';

chai.use(chaiColors);

describe('Password generator', () => {
  it('Toggle theme', () => {
    cy.visit(TEST_URL);

    checkLightTheme();

    cy.get('[role="switch"]').first().click();
    checkDarkTheme();

    cy.get('[role="switch"]').first().click();
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
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        .eq(3)
        .should(
          'contain.text',
          translation.includeLowercaseCharacters,
        );

      cy.get(Elements.FormItemContainerLeftCol)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        .eq(4)
        .should(
          'contain.text',
          translation.includeUppercaseCharacters,
        );

      cy.get(Elements.FormItemContainerLeftCol)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        .eq(5)
        .should(
          'contain.text',
          translation.excludeSimilarCharacters,
        );

      cy.get(Elements.FormItemContainerLeftCol)
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        .eq(6)
        .should(
          'contain.text',
          translation.excludeAmbiguousCharacters,
        );
    });
  });

  it('Select password length', () => {
    cy.visit(TEST_URL);

    if (FORM_ITEMS_INITIAL_STATE[0].options) {
      const { options } = FORM_ITEMS_INITIAL_STATE[0];
      /* eslint-disable unicorn/no-for-loop */
      for (
        let index = 0;
        index < options.length;
        index += 1
      ) {
        cy.get(
          `${Elements.FormContainer} ${Elements.SelectFieldContent}`,
        ).click();

        cy.get(
          `${Elements.FormContainer} ${Elements.SelectFieldIDropDownContainer} ${Elements.SelectFieldItemContainer}`,
        )
          .eq(index)
          .click();

        cy.get(`${Elements.PasswordWrapper} p`)
          .invoke('text')
          .should('have.length', options[index]?.value);
      }
    }
  });
});
