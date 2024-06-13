export const Elements = {
  LayoutContainer: '[data-testid="LayoutContainer"]',
  HeaderContainer: '[role="banner"]',
  SwitchContainer: '[role="switch"]',
  ThemeToggle: '[data-testid="ThemeToggle"]',
  SelectFieldContainer: '[role="listbox"]',
  SelectFieldContent: '[data-testid="SelectFieldContent"]',
  SelectFieldItemContainer: '[role="option"]',
  SelectFieldIDropDownContainer:
    '[data-testid="DropDownContainer"]',
  FormContainer: '[role="form"]',
  TopSectionContainer:
    '[data-testid="TopSectionContainer"]',
  FormItemContainer: '[data-testid="FormItemContainer"]',
  FormItemContainerLeftCol:
    '[data-testid="FormItemContainer"] [role="button"]',
  MidSectionContainer:
    '[data-testid="MidSectionContainer"]',
  PasswordWrapper: '[data-testid="PasswordWrapper"]',
  CopyButton: '[data-testid="CopyButton"]',
  GenerateButton: '[data-testid="GenerateButton"]',
  NumberFieldInput: '[data-testid="NumberFieldInput"]',
  NumberFieldArrowUp: '[data-testid="NumberFieldArrowUp"]',
  NumberFieldArrowDown:
    '[data-testid="NumberFieldArrowDown"]',
} as const;

export const TEST_URL = 'http://localhost:3001';
