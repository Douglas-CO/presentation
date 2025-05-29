import { Box, Grid, Stack, Button, Typography } from "@mui/material";
import { ThemeSettings } from "@/theme/Theme";
import { alpha } from "@mui/material/styles";

import {
  CustomBoxMoveEnd,
  CustomPasswordTextField,
  CustomTextField,
  gridSizeMdLg12,
  loginFormSchema,
} from "@/shared";
import PageContainer from "@/components/container/PageContainer";
import { CreateLoginParamsBase, useLogin } from "@/actions";
import { useForm } from "react-hook-form";
import { InputAndBtnGridSpace } from "@/shared/components/common";
import { yupResolver } from "@hookform/resolvers/yup";

type SaveFormData = CreateLoginParamsBase & {};

const Login: React.FC<{}> = () => {
  const theme = ThemeSettings();

  ///* form
  const form = useForm<SaveFormData>({
    resolver: yupResolver(loginFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const loginMutation = useLogin();
  const onSave = async (data: SaveFormData) => {
    if (!isValid) return;
    ///* create
    //createLogin(data);
    loginMutation.mutate(data);
  };

  return (
    <PageContainer title="Login" description="this is Login page">
      <Grid
        container
        spacing={0}
        sx={{
          overflowX: "hidden",
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
          height: "100%",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <CustomBoxMoveEnd
          width={10}
          height={15}
          cmToPx={37.8}
          widthEnd={0.4}
          timeMove={1000}
          color="Black"
          bgColor="White"
          CampShow={() => (
            <Grid sx={{ m: 5 }}>
              <Box component="form" noValidate>
                <Stack>
                  <Typography
                    fontWeight="700"
                    variant="h5"
                    mb={1}
                    textAlign="center"
                  >
                    Bienvenido a S360
                  </Typography>
                  <Box>
                    <CustomTextField
                      label="Nombre de usuario"
                      name="client_id"
                      control={form.control}
                      defaultValue={form.getValues().client_id}
                      error={errors.client_id}
                      helperText={errors.client_id?.message}
                      required={false}
                      ignoreTransform
                    />
                  </Box>
                  <Box>
                    <InputAndBtnGridSpace
                      inputNode={
                        <CustomPasswordTextField
                          label="Contraseña del usuario"
                          name="client_secret"
                          defaultValue={form.getValues().client_secret}
                          control={form.control}
                          errors={errors?.client_secret}
                          helperText={errors?.client_secret?.message}
                          size={gridSizeMdLg12}
                          required={false}
                        />
                      }
                    />
                  </Box>
                </Stack>
                <Button
                  //type="submit"
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{ mt: 4 }}
                  onClick={handleSubmit(onSave, () => {})}
                >
                  Iniciar sesión
                </Button>
              </Box>
            </Grid>
          )}
        />
      </Grid>
    </PageContainer>
  );
};

export default Login;
