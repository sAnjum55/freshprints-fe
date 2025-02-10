import { Stack, Typography, styled } from "@mui/material";

export const ParentBox = styled(Stack)(() => ({
    alignItems: 'center',
    gap: 20,
    padding: 20,
    width: 400,
    marginBottom: 30,
  }));

  export const HeaderText = styled(Typography)(() => ({
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  }));