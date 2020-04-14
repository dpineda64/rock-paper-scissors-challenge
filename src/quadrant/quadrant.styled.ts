import styled from '@emotion/styled';
import theme from '../theme';

interface QuadrantProps {
  resultOnly: boolean;
  decided: boolean;
}

const Quadrant = styled('div')<QuadrantProps>(
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    justifyContent: 'center',
    gap: '30px',
    position: 'relative',
    [theme.queries[1]]: {
      gap: 100,
    },
  },
  ({ resultOnly }) =>
    resultOnly && {
      gridTemplateColumns: 'auto auto',
    },
  ({ decided, resultOnly }) =>
    decided &&
    resultOnly && {
      [theme.queries[0]]: {
        gridTemplateColumns: 'auto auto auto',
      },
    },
);

export default Quadrant;
