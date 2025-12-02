import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

// import AuthSocialButtons from './AuthSocialButtons';

type LoginFormData = {
  username: string;
  password: string;
  // empresa: string;
};

const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  //const isBlocked = useAuthNoLSStore((s) => s.isBlocked);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  ///* mutations
  //const loginMutation = useLogin();

  ///* form
  const usernameForm = useForm<LoginFormData>({
    //resolver: yupResolver(loginFormSchema),
  });

  const {
    handleSubmit,
    register,
    formState: { isValid: isValidLoginData },
  } = usernameForm;

  ///* handlers
  const onSubmit = (data: LoginFormData) => {
    //if (!isValidLoginData || isBlocked) return;
    console.log(data);
    //loginMutation.mutate(data);
  };

  return (
    <>
      <Box mt={3}>
        <Divider></Divider>
      </Box>
      <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <Box>
            Nombre de usuario
            <TextField
              id="username"
              variant="outlined"
              autoComplete="username"
              fullWidth
              required
              autoFocus
              InputProps={{
                style: { color: "black" },
              }}
              {...register("username")}
              error={!!usernameForm.formState.errors.username}
              helperText={usernameForm.formState.errors.username?.message}
            />
          </Box>
          <Box>
            Password
            <TextField
              id="password"
              variant="outlined"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              fullWidth
              required
              InputProps={{
                style: { color: "black" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{ color: "blue" }}
                    >
                      {showPassword}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password")}
              error={!!usernameForm.formState.errors.password}
              helperText={usernameForm.formState.errors.password?.message}
            />
          </Box>
        </Stack>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          //disabled={loginMutation.isPending || isBlocked}
        >
          Iniciar sesión
        </Button>
      </Box>
    </>
  );
};

export default AuthLogin;
