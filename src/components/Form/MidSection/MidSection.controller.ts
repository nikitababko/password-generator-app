import { useState } from 'react';
import { generatePassword } from '@nikitababko/password-generator';

import { useAppContext } from '../../../store';

import { UseMidSectionControllerType } from './MidSection.types';
import {
  animationTime,
  firstElement,
} from './MidSection.data';
import { useTranslate } from '../../../hooks';

export const useMidSectionController: UseMidSectionControllerType =
  () => {
    const [password, setPassword] = useState<string[]>([
      '',
    ]);
    const [isCopied, setIsCopied] =
      useState<boolean>(false);

    const [state] = useAppContext();

    const t = useTranslate();

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(
          password[firstElement],
        );

        setIsCopied(true);

        setTimeout(
          () => setIsCopied(false),
          Number(`${animationTime}000`),
        );
      } catch (error) {
        console.error(error);
      }
    };

    const handleGeneratePassword = () => {
      setPassword(
        generatePassword({
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          length: state.formItems[0].value as number,
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          includeSymbols: state.formItems[1]
            .value as boolean,
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          includeNumbers: state.formItems[2]
            .value as boolean,
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          includeLowerCaseChars: state.formItems[3]
            .value as boolean,
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          includeUpperCaseChars: state.formItems[4]
            .value as boolean,
          // eslint-disable-next-line @typescript-eslint/no-magic-numbers
          noSimilarChars: state.formItems[5]
            .value as boolean,
          quantity: 1,
        }),
      );
    };

    return {
      handleGeneratePassword,
      password,
      handleCopy,
      isCopied,
      generateButtonTranslation: t.generate,
    };
  };
