import type { ValueOf } from 'ts-essentials';

import { Elements } from './spec.data';
import {
  COLOR_DESIGN_TOKENS,
  DarkTheme,
  LightTheme,
} from '../../src/utils';
import Chainable = Cypress.Chainable;

const checkExistAndBackgroundColor = (
  element: Chainable<
    JQuery<
      HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    >
  >,
  // TODO: remove лишние типы и вместо них typeof делать от объекта
  color: ValueOf<typeof COLOR_DESIGN_TOKENS>,
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
