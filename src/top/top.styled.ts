import styled from '@emotion/styled';

export const TopContainer = styled('div')({
  border: '1px solid hsl(217, 16%, 45%)',
  padding: '0.7rem 2rem',
  gridTemplateColumns: '150px 150px',
  borderRadius: 20,
  marginBottom: '3rem',
});

export const TopTitle = styled('h1')({
  wordSpacing: '150px',
  lineHeight: '26px',
  color: '#fff',
  width: '40%',
  fontWeight: 700,
  display: 'inline-block',
  textTransform: 'uppercase',
});

export const Score = styled('div')({
  background: '#fff',
  float: 'right',
  width: '17%',
  borderRadius: '5px',
  textAlign: 'center',
  padding: '1rem',
  span: {
    display: 'block',
    fontSize: 15,
    '&:first-of-type': {
      letterSpacing: '1px',
      color: 'hsl(229, 64%, 46%)',
    },
    '&:last-child': {
      fontSize: 55,
    },
  },
});
