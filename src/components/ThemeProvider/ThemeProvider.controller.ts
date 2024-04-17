import { useAppContext } from '../../store';

export const useController = () => {
  const [state] = useAppContext();

  return {
    theme: state.theme,
  };
};
