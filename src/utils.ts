import { ChoiceType } from './choice';
import { Option } from './availableChoices';
import theme from './theme';

export function getGradient(variant: ChoiceType) {
  switch (variant) {
    case 'paper':
      return theme.gradients.paper;
    case 'rock':
      return theme.gradients.rock;
    default:
      return theme.gradients.scissors;
  }
}

export function didHumanWin(humanPicked: ChoiceType, machinePicked: Option) {
  return machinePicked.lossesTo.includes(humanPicked);
}
