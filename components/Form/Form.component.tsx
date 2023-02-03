import React from 'react';

import {
  Border,
  Container,
  CopyButton,
  GenerateButton,
  GenerateButtonLabel,
  Mid,
  PasswordLabel,
  PasswordWrapper,
  Top,
} from './Form.styles';
import { FormItem } from './FormItem';
import { formItemData } from './FormItem/FormItem.data';
import { Icon } from '../Icon';

export const Form: React.FC = () => {
  return (
    <Container>
      <Top>
        {formItemData.map((formItem) => (
          <FormItem key={formItem.id} item={formItem} />
        ))}
      </Top>

      <Border />

      <Mid>
        <GenerateButton>
          <GenerateButtonLabel>
            Generate button
          </GenerateButtonLabel>
          <Icon name="ArrowRepeat" width={31} height={32} />
        </GenerateButton>

        <PasswordWrapper>
          <PasswordLabel>
            {'Wl2_Xt3:Zp8}Wz4+Ih3!Hd6:Zq'}
          </PasswordLabel>
        </PasswordWrapper>

        <CopyButton>
          <Icon name="CopySelect" width={31} height={32} />
        </CopyButton>
      </Mid>
    </Container>
  );
};
