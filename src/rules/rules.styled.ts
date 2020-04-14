import styled from '@emotion/styled';
import theme from '../theme';

export const Modal = styled('div')({
  position: 'fixed',
  top: 0,
  textAlign: 'center',
  bottom: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem',
  backgroundColor: theme.colors.white,
  svg: {
    alignSelf: 'center',
    [theme.queries[1]]: {
      transform: 'scale(1.5)',
    },
    ':last-child': {
      transform: 'translateY(100px)',
    },
  },
});

export const RulesContainer = styled('div')({
  position: 'fixed',
  zIndex: 10,
  left: 0,
  right: 0,
  bottom: 0,
  [theme.queries[1]]: {
    textAlign: 'right',
    button: {
      transform: 'translate(-10px, -20px)',
    },
  },
});
