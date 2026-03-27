import { Button, Container, FormControl, Grid, Input, InputLabel, Typography } from '@mui/material';
import * as motion from 'motion/react-client';

import useLogin from './hooks/useLogin';
const AuthPage = () => {
  const { formLogin, handleSubmit, register, errors } = useLogin();
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      key="box"
    >
      <Container maxWidth="sm">
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          className="box-shadow"
          height={'100'}
        >
          <form onSubmit={handleSubmit(formLogin)}>
            <FormControl sx={{ m: 1, width: '90%' }}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input {...register('email')} id="email" aria-describedby="my-helper-text" />
            </FormControl>
            {errors.email && (
              <Typography variant="body1" color="error">
                {errors.email.message}
              </Typography>
            )}
            <FormControl sx={{ m: 1, width: '90%' }}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input {...register('password')} id="password" aria-describedby="my-helper-text" />
            </FormControl>

            {errors.password && (
              <Typography variant="body1" color="error">
                {errors.password.message}
              </Typography>
            )}
            <FormControl sx={{ m: 1, width: '90%' }}>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </FormControl>
          </form>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default AuthPage;
