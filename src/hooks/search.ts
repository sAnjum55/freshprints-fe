import { GitHubSearchResponse, User } from "../types/search";

import { searchActions } from "../redux/slices/search";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function useGetGithubUsers() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const dispatch = useDispatch();
  const getGithubUsers = async (searchQuery: string) => {
    const url = `https://api.github.com/search/users?q=${searchQuery}`;
    try {
      // setUser(undefined)
      setLoading(true);
      const response = await fetch(url);
      const data: GitHubSearchResponse = await response.json();
      if (data?.items?.length) {
        setUser(data?.items[0]);
        if (dispatch)
          dispatch(
            searchActions.setSearchedHistory({
              searchQuery: searchQuery,
              userDetails: data?.items[0],
            })
          );
      } else {
        if (dispatch)
          dispatch(
            searchActions.setSearchedHistory({
              searchQuery: searchQuery,
              userDetails: undefined,
            })
          );
      }
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      setLoading(false);
    }
  };
  return { loading, user, getGithubUsers };
}
