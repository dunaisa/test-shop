import axios from "axios";
import { AppDispatch } from "../store";
import { Card } from "../../types/Card";
import { cardSlice } from "./CardSlice";


export const fetchCards = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(cardSlice.actions.fetchCards());
    const res = await axios.get<Card[]>('https://appevent.ru/dev/task1/catalog');
    dispatch(cardSlice.actions.fetchCardsSuccess(res.data));
  } catch(error) {
    if ( typeof error === "object" && error && "message" in error && typeof error.message === "string") {
      dispatch(cardSlice.actions.fetchCardsError(error.message));
    }    
  }
}