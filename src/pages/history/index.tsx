import { ContentBox, HeaderText, NoResults, ParentBox } from "./style";
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "@mui/material";
import StickyHeader from "../../components/history/stickyHeader";
import { UserSearchHistory } from "../../types/history";
import UserSearchHistoryCell from "../../components/history/userSearchHistoryCell";
import { searchActions } from "../../redux/slices/search";

const History = () => {
  const searchHistory = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.search?.searchHistory
  ) as UserSearchHistory[];

  const dispatch = useDispatch();
  const clearSearchHistory = useCallback(() => {
    if (dispatch) dispatch(searchActions.deleteSearchedHistory());
  }, [dispatch]);

  const returnSearchHistoryComp = useMemo(()=>{
    if(searchHistory.length) return <StickyHeader />
    return <NoResults>No Searches Yet</NoResults>
  },[searchHistory.length])

  return (
    <ParentBox>
      <HeaderText>Your Search History</HeaderText>
      <ContentBox>
        {returnSearchHistoryComp}
        {searchHistory.map((his) => {
          return <UserSearchHistoryCell history={his} />;
        })}
      </ContentBox>
      {Boolean(searchHistory.length) && <Button
        variant="contained"
        onClick={clearSearchHistory}
        disabled={!searchHistory.length}
      >
        Clear Search History
      </Button>}
    </ParentBox>
  );
};

export default History;
