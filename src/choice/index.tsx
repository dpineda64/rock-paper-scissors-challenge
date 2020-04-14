import React from 'react';
import ChoiceStyled, {
  ChoiceProps,
  ChoiceInner,
  Choice,
} from './choice.styled';
import Icon from '../svg';

export default function (
  props: ChoiceProps & React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <ChoiceStyled {...props}>
      <ChoiceInner>
        <Icon name={props.variant} />
      </ChoiceInner>
    </ChoiceStyled>
  );
}

export type ChoiceType = Choice;
