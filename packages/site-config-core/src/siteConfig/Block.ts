import { Input } from './Input';
import { View } from './View';

export type Block = {
  name: string;
  views: View[];
  inputs: Input[];
};
