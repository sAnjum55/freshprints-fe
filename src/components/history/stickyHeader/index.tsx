import { ColOne, ColTwo, StickyHeaderBox } from "./style";

import React from "react";
import { Typography } from "@mui/material";

const StickyHeader = () => {
  return (
    <StickyHeaderBox>
      <ColOne>
        <Typography>Search Term</Typography>
      </ColOne>
      <ColTwo>
        <Typography>Search Results</Typography>
      </ColTwo>
    </StickyHeaderBox>
  );
};

export default React.memo(StickyHeader);
