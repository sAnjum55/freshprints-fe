import { Avatar, Stack, Typography, styled } from "@mui/material";

export const UserDetailsBox = styled(Stack)(() => ({
    flexDirection: 'row',
    padding: 20,
    gap: 40,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  }));

  export const ImageBox= styled(Stack)(() => ({
    gap: 10,
  }));

  export const LightText = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
  }));

  export const BoldDarkText = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    color: theme.palette.text.primary,
  }));

 export const Image = styled(Avatar)(() => ({
    height: 200,
    width: 200,
    borderRadius: 0,
  }));