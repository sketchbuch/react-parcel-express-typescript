import { Langs } from '../../types';

export interface Props {
  isSsr: boolean;
}

export interface Store {
  app: boolean;
}

export interface LangBtnProps {
  label: Langs;
  onClick: (lang: Langs) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}
