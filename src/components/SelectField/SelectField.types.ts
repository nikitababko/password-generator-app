import type { LanguagesType } from '../../hooks/useTranslate/useTranslate.types';

import type { ItemType } from './Item/Item.types';

export type Props = {
  data?: ItemType[];
  styles?: Partial<{
    width: string;
  }>;
  callback?: (
    id: ItemType['id'] | LanguagesType,
    value: string | number,
  ) => void;
};

export type ChevronWrapperProps = {
  isOpen: boolean;
};

export type ContainerStylesProps = Pick<Props, 'styles'>;
