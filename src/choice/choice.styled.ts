import styled from '@emotion/styled';
import theme from '../theme';
import { getGradient } from '../utils';

export type Choice = 'rock' | 'paper' | 'scissors' | 'empty';

export interface ChoiceProps {
  variant: Choice;
}

export const ChoiceInner = styled('div')({
  color: theme.colors.white,
  alignSelf: 'center',
  zIndex: 1,
});

const choice = styled('div')<ChoiceProps>(
  {
    width: 150,
    height: 150,
    marginTop: '2rem',
    borderRadius: '50%',
    backgroundColor: theme.colors.white,
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    gridColumn: 'span 2',
    boxShadow: 'inset 0px -25px 0 -13px rgba(0,0,0,0.15)',
    ':hover': {
      cursor: 'pointer',
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      transform: 'scale(1.2)',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      zIndex: 0,
      top: '15%',
      backgroundColor: theme.colors.white,
      boxShadow: 'inset 0px 26px 0 -13px rgba(0,0,0,0.04)',
    },
    backgroundRepeat: 'no-repeat',
    '&:last-child:nth-of-type(odd)': {
      gridColumn: '2 / span 2',
    },
    [theme.queries[1]]: {
      transform: 'scale(1.2)',
    },
  },
  ({ variant }: ChoiceProps) => {
    if (variant === 'empty') {
      return {
        backgroundColor: 'hsl(237, 49%, 15%)',
        opacity: '.5',
        boxShadow: 'none',
        '&:before': {
          display: 'none',
        },
      };
    }
    return {
      backgroundImage: `linear-gradient(90deg, ${getGradient(variant)})`,
    };
  },
);

export default choice;
