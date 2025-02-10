import {
  Button,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { HeaderText, ParentBox } from "./style";
import React, { useCallback, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";

interface UserSearchBarProps {
  getGitHubUser: (val: string) => void;
  loading: boolean;
}

const UserSearchBar: React.FC<UserSearchBarProps> = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    []
  );
  const fetchUsers = useCallback(async () => {
    await props?.getGitHubUser(searchValue);
  }, [props, searchValue]);

  return (
    <ParentBox>
      <HeaderText>Search Github User</HeaderText>
      <Stack gap={5}>
        <TextField
          value={searchValue}
          label="Search Github User"
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          style={{ width: "100%" }}
          onClick={fetchUsers}
          loading={props?.loading}
          disabled={props?.loading || !searchValue}
        >
          Search
        </Button>
      </Stack>
    </ParentBox>
  );
};

export default React.memo(UserSearchBar);
