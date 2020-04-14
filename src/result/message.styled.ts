import styled from '@emotion/styled';
import theme from '../theme';

const Message = styled('div')({
  width: '100%',
  textAlign: 'center',
  h1: {
    fontSize: '4rem',
    color: theme.colors.white,
  },
  position: 'absolute',
  transform: 'translateY(200px)',
  [theme.queries[1]]: {
    position: 'relative',
    transform: 'none',
  },
});

export default Message;
