import styled from '@emotion/styled';
import theme from '../theme';

interface SelectedProps {
  decided: boolean;
}

const Selected = styled('div')<SelectedProps>(
  {
    textAlign: 'center',
    color: theme.colors.white,
    transition: 'all 0.5s ease',
    span: {
      marginBottom: '1rem',
    },
  },
  ({ decided }) =>
    decided && {
      [theme.queries[1]]: {
        ':first-of-type': {
          transform: 'translateX(-100%)',
        },
        ':last-of-type': {
          transform: 'translate(100%)',
        },
      },
    },
);

export default Selected;
