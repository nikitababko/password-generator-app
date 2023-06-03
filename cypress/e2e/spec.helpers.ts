import type { ValueOf } from 'ts-essentials';

import type { ColorDesignTokensType } from '../../src/utils/designTokens/designTokens.types';
import {
  COLOR_DESIGN_TOKENS,
  DarkTheme,
  LightTheme,
} from '../../src/utils/designTokens';
import { Elements } from './spec.data';
import Chainable = Cypress.Chainable;

const checkExistAndBackgroundColor = (
  element: Chainable<
    JQuery<
      HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    >
  >,
  color: ValueOf<ColorDesignTokensType>,
) => {
  return element
    .should('exist')
    .should('have.css', 'backgroundColor')
    .and('be.colored', color);
};

export const checkLightTheme = () => {
  checkExistAndBackgroundColor(
    cy.get(Elements.LayoutContainer),
    LightTheme.backgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.SwitchContainer).first(),
    COLOR_DESIGN_TOKENS.BLUE_TURQUOISE,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.SelectFieldContent),
    LightTheme.selectBackgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.FormContainer),
    LightTheme.foregroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.FormItemContainerLeftCol),
    LightTheme.formItemLeftColBackgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.GenerateButton),
    LightTheme.generateButtonBackgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.PasswordWrapper),
    LightTheme.formItemLeftColBackgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.CopyButton),
    COLOR_DESIGN_TOKENS.BLUE,
  );
};

export const checkDarkTheme = () => {
  checkExistAndBackgroundColor(
    cy.get(Elements.LayoutContainer),
    DarkTheme.backgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.SwitchContainer).first(),
    COLOR_DESIGN_TOKENS.BLUE_SLATE,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.SelectFieldContent),
    DarkTheme.selectBackgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.FormContainer),
    DarkTheme.foregroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.FormItemContainerLeftCol),
    DarkTheme.formItemLeftColBackgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.GenerateButton),
    DarkTheme.generateButtonBackgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.PasswordWrapper),
    DarkTheme.formItemLeftColBackgroundColor,
  );

  checkExistAndBackgroundColor(
    cy.get(Elements.CopyButton),
    COLOR_DESIGN_TOKENS.BLUE,
  );
};
