import styled from '@emotion/styled';
import theme from '../theme';

interface ButtonProps {
  variant?: 'solid' | 'bordered';
  small?: boolean;
}

const Button = styled('button')<ButtonProps>(
  {
    padding: '1rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    borderRadius: 5,
    transition: 'all .5s ease',
    letterSpacing: '1px',
    color: theme.colors.darkText,
    boxShadow: 'none',
    minWidth: 200,
    ':hover': {
      cursor: 'pointer',
      backgroundColor: theme.colors.white,
    },
  },
  ({ variant }) =>
    variant === 'bordered' && {
      background: 'transparent',
      color: theme.colors.white,
      ':hover': {
        backgroundColor: theme.colors.white,
        color: theme.colors.darkText,
      },
    },
  ({ small }) =>
    small && {
      minWidth: 'auto',
      padding: '.6rem 2rem',
    },
);

Button.defaultProps = {
  variant: 'solid',
};

export default Button;
