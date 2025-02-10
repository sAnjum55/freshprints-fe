import { Stack, Typography, styled } from "@mui/material";

export const ParentBox = styled(Stack)(() => ({
    height: '90vh',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  }));


  export const ContentBox = styled(Stack)(() => ({
    height: '70%',
    overflow: 'auto',
    padding: 20,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none', 
    'scrollbar-width': 'none',
  }));

  export const HeaderText = styled(Typography)(() => ({
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  }));

  export const NoResults = styled(Typography)(() => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    marginTop: 200
  }));