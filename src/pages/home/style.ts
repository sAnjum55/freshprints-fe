import { Stack, Typography, styled } from "@mui/material";

export const ParentBox = styled(Stack)(() => ({
    width: '100%',
    height: '90vh',
    justifyContent: 'center',
    alignItems: 'center',
  }));

  export const LightText = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
  }));

  