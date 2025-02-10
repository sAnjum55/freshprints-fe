import { Stack, Typography, styled } from "@mui/material";

export const UserHistoryCellBox = styled(Stack)(() => ({
  flexDirection: "row",
  gap: 200,
  justifyContent: "space-between",
  padding: 20,
}));

export const BoldDarkText = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.text.primary,
}));
