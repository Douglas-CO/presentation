import { useAuthenticateStore } from "@/store/app";
import { useUiStore } from "@/store/ui/ui.store";
import { Box, Container, styled, useTheme } from "@mui/material";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}));

const FullLayout: FC = () => {
  const customizer = useUiStore((state) => state.state);
  const theme = useTheme();

  ///* global state ============================
  const fetchAllSystemParameters = useAuthenticateStore(
    (s) => s.fetchAllSystemParameters
  );

  ///* effects ============================
  useEffect(() => {
    fetchAllSystemParameters();

    const intervalId = setInterval(() => {
      fetchAllSystemParameters();
    }, 3600 * 1000); // 1 hour
    // }, 2000);

    return () => clearInterval(intervalId);
  }, [fetchAllSystemParameters]);

  return (
    <MainWrapper>
      <PageWrapper
        className="page-wrapper"
        sx={{
          ...(customizer.isCollapse && {
            [theme.breakpoints.up("lg")]: {
              ml: `${customizer.MiniSidebarWidth}px`,
            },
          }),
        }}
      >
        <Container
          sx={{
            maxWidth: customizer.isLayout === "boxed" ? "lg" : "100%!important",
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
