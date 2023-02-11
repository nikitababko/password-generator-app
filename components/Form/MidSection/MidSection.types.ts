export type UseMidSectionControllerType = () => {
  handleGeneratePassword: () => void;
  password: string[];
  handleCopy: () => Promise<void>;
  isCopied: boolean;
};

export type CopyButtonStylesProps = {
  isCopied: boolean;
};
