import { useCallback, useEffect, useState } from 'react';
import generatePassword from '@nikitababko/password-generator';
import type { GeneratePasswordType } from '@nikitababko/password-generator/dist/index.types';
import { useTranslate } from '../../../hooks';
import { ANIMATION_TIME } from './MidSection.data';
import { useFormStore } from '../../../store/formState';

export const useController = () => {
  const [password, setPassword] = useState<
    ReturnType<GeneratePasswordType>
  >(['']);
  const [isCopied, setIsCopied] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const formItems = useFormStore(
    (state) => state.formItems,
  );

  const t = useTranslate();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password[0]);

      setIsCopied(true);

      setTimeout(
        () => setIsCopied(false),
        Number(`${ANIMATION_TIME}000`),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleGeneratePassword = useCallback(() => {
    setIsGenerated((previousState) => !previousState);

    setPassword(
      generatePassword({
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        length: formItems[0].value as number,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        includeSymbols: formItems[1].value as boolean,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        includeNumbers: formItems[2].value as boolean,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        includeLowerCaseChars: formItems[3]
          .value as boolean,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        includeUpperCaseChars: formItems[4]
          .value as boolean,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        excludeSimilarChars: formItems[5].value as boolean,
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        excludeAmbiguousChars: formItems[6]
          .value as boolean,
        quantity: 1,
      }),
    );
  }, [formItems]);

  useEffect(() => {
    handleGeneratePassword();
  }, [handleGeneratePassword]);

  return {
    handleGeneratePassword,
    password,
    handleCopy,
    isCopied,
    t,
    isGenerated,
  };
};
