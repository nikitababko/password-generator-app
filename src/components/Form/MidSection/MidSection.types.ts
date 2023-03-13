export type UseMidSectionControllerType = () => {
  handleGeneratePassword: () => void;
  password: string[];
  handleCopy: () => Promise<void>;
  isCopied: boolean;
  generateButtonTranslation: string;
};

export type CopyButtonStylesProps = {
  isCopied: boolean;
};
