import type { ItemType } from './Item/Item.types';

export type Props = {
  options?: ItemType[];
  styles?: Partial<{
    width: string;
  }>;
  callback?: (
    id: ItemType['id'],
    value: ItemType['value'],
  ) => void;
  defaultOption?: ItemType | null;
};

export type ChevronWrapperProps = {
  isOpen: boolean;
};

export type ContainerStylesProps = Pick<Props, 'styles'>;
