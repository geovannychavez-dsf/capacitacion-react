import { Grid } from "@mui/material";
export const ListCharacter = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};
