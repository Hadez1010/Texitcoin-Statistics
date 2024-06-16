import Box from '@mui/material/Box';
import Stack, { StackProps } from '@mui/material/Stack';
// ----------------------------------------------------------------------

type Props = StackProps & {
  results: number;
};

export default function UserTableFiltersResult({ results, ...other }: Props) {
  return (
    <Stack spacing={1.5} {...other}>
      <Box sx={{ typography: 'body2' }}>
        <strong>{results}</strong>
        <Box component="span" sx={{ color: 'text.secondary', ml: 0.25 }}>
          users found
        </Box>
      </Box>
    </Stack>
  );
}
