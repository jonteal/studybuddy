import { useDispatch, useSelector } from "react-redux";
import client from "../../App";
import { GET_INDEX_CARDS } from "../../graphql/queries/indexCardQueries";
import { selectIndexCards, actions } from "../slice/indexCardSlice";

export default function useIndexCards() {
  const dispatch = useDispatch();
  const indexCardList = useSelector(selectIndexCards);

  const getIndexCardList = async () => {
    const response = await client.query({
      query: GET_INDEX_CARDS,
    });
    dispatch(actions.setIndexCards(response.data.indexCards));
  };

  return { getIndexCardList, indexCardList };
}
