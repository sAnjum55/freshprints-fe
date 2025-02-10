import { Stack, styled } from "@mui/material";

export const StickyHeaderBox = styled(Stack)(() => ({
    backgroundColor: 'gray',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    position: 'sticky',
    top: 0,              
    zIndex: 1,           
  }));

  export const ColOne = styled(Stack)(() => ({    
  }));
  export const ColTwo = styled(Stack)(() => ({     
  }));