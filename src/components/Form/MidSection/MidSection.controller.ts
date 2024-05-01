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

    const [
      { value: length },
      { value: includeSymbols },
      { value: includeNumbers },
      { value: includeLowerCaseChars },
      { value: includeUpperCaseChars },
      { value: excludeSimilarChars },
      { value: excludeAmbiguousChars },
    ] = formItems;

    setPassword(
      generatePassword({
        length: length as number,
        includeSymbols: includeSymbols as boolean,
        includeNumbers: includeNumbers as boolean,
        includeLowerCaseChars:
          includeLowerCaseChars as boolean,
        includeUpperCaseChars:
          includeUpperCaseChars as boolean,
        excludeSimilarChars: excludeSimilarChars as boolean,
        excludeAmbiguousChars:
          excludeAmbiguousChars as boolean,
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
