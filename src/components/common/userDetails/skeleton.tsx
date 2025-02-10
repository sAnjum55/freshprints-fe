import { ImageBox, LightText, UserDetailsBox } from "./style";
import { Skeleton, Stack } from "@mui/material";

const UserDetailsSkeleton = () => {
    return (
      <UserDetailsBox
      >
        <ImageBox>
          <LightText>User Image</LightText>
          <Skeleton variant='rectangular'  width={200} height={200} />
        </ImageBox>
        <Stack>
          <LightText>GitHub User Name</LightText>
          <Skeleton width={100} />
          <Skeleton width={150} />
          <Skeleton width={150} height={40} />
        </Stack>
      </UserDetailsBox>
    );
  };
  
  export default UserDetailsSkeleton;