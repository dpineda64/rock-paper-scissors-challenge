import { ChoiceType } from './choice';

export interface Option {
  name: ChoiceType;
  lossesTo: ChoiceType[];
}

const availableOptions: Option[] = [
  { name: 'paper', lossesTo: ['scissors'] },
  { name: 'scissors', lossesTo: ['rock'] },
  { name: 'rock', lossesTo: ['paper'] },
];

export default availableOptions;
