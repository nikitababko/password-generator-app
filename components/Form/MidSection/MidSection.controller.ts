import { useState } from 'react';
import { generatePassword } from '@nikitababko/password-generator';

import { useAppContext } from '../../../store';

import { UseMidSectionControllerType } from './MidSection.types';
import {
  animationTime,
  firstElement,
} from './MidSection.data';

export const useMidSectionController: UseMidSectionControllerType =
  () => {
    const [password, setPassword] = useState<string[]>([
      '',
    ]);
    const [isCopied, setIsCopied] =
      useState<boolean>(false);

    const {
      form: [formItems],
    } = useAppContext();

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
          noSimilarChars: formItems[5].value as boolean,
          quantity: 1,
        }),
      );
    };

    return {
      handleGeneratePassword,
      password,
      handleCopy,
      isCopied,
    };
  };
