const theme: any = {
  gradients: {
    scissors: 'hsl(39, 89%, 49%), hsl(40, 84%, 53%)',
    paper: 'hsl(230, 89%, 62%),  hsl(230, 89%, 65%)',
    rock: 'hsl(349, 71%, 52%), hsl(349, 70%, 56%)',
  },
  colors: {
    white: '#fff',
    darkText: 'hsl(229, 25%, 31%)',
    scoreText: 'hsl(229, 64%, 46%)',
    headerOutline: 'hsl(217, 16%, 45%)',
  },
  breakpoints: [375, 1366],
  queries: [],
};

theme.queries = [
  ...theme.queries,
  ...theme.breakpoints.map((bp: number) => `@media (min-width: ${bp}px)`),
];

export default theme;
