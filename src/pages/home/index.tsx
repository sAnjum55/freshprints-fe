import { LightText, ParentBox } from "./style";

import { Stack } from "@mui/material";
import UserDetails from "../../components/common/userDetails";
import UserDetailsSkeleton from "../../components/common/userDetails/skeleton";
import UserSearchBar from "../../components/search/userSearchBar";
import { useGetGithubUsers } from "../../hooks/search";

const Home = () => {
  const { loading, user, getGithubUsers } = useGetGithubUsers();
  const showDetails = user && !loading;
  return (
    <ParentBox>
      <UserSearchBar getGitHubUser={getGithubUsers} loading={loading} />
      {loading && <UserDetailsSkeleton /> }
      {showDetails && (
        <Stack>
          <LightText>Search Results</LightText>
          <UserDetails user={user} />
        </Stack>
      )}
    </ParentBox>
  );
};

export default Home;
