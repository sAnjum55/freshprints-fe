import { BoldDarkText, UserHistoryCellBox } from "./style";

import React from "react";
import { Stack } from "@mui/material";
import UserDetails from "../../common/userDetails";
import { UserSearchHistory } from "../../../types/history";

interface UserSearchHistoryCellProps {
  history: UserSearchHistory;
}

const UserSearchHistoryCell: React.FC<UserSearchHistoryCellProps> = (props) => {
  const { history } = props;
  return (
    <UserHistoryCellBox>
      <Stack>
        <BoldDarkText>{history?.searchQuery}</BoldDarkText>
      </Stack>
      <Stack>
        <UserDetails user={history?.userDetails} />
      </Stack>
    </UserHistoryCellBox>
  );
};

export default React.memo(UserSearchHistoryCell);
