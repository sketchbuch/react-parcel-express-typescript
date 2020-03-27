import { Langs } from '../../types';
import { TFunction } from 'i18next';

export interface Props {
  isSsr: boolean;
}

export interface Store {
  app: boolean;
}

export interface LangBtnProps {
  label: Langs;
  onClick: (lang: Langs) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  t: TFunction;
}
