import {
  BoldDarkText,
  Image,
  ImageBox,
  LightText,
  UserDetailsBox,
} from "./style";
import { Button, Stack } from "@mui/material";
import React, { useCallback } from "react";

import { User } from "../../../types/search";

interface UserDetailsProps {
  user: User | undefined;
}

const UserDetails: React.FC<UserDetailsProps> = (props) => {
  const { user } = props;
  const openProfileTab = useCallback(() => {
    window.open(user?.html_url, "_blank");
  }, [user?.html_url]);
  return (
    <>
      {user ? (
        <UserDetailsBox>
          <ImageBox>
            <LightText>User Image</LightText>
            <Image src={user?.avatar_url} />
          </ImageBox>
          <Stack>
            <LightText>GitHub User Name</LightText>
            <BoldDarkText>{user?.login}</BoldDarkText>
            <Button onClick={openProfileTab}>Visit profile page</Button>
          </Stack>
        </UserDetailsBox>
      ) : (
        <LightText>Search Results Not Found</LightText>
      )}
    </>
  );
};

export default React.memo(UserDetails);
