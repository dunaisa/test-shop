import { useEffect } from "react";
import './CardsContainer.css';
import Card from "../Card/Card";
import { fetchCards } from "../../store/reducers/ActionCreators";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const CardsContainer = ():JSX.Element => {

  const dispatch = useAppDispatch();
  const { cards, isLoading, error } = useAppSelector(state => state.cardReducer);

  useEffect(() => {    
    dispatch(fetchCards());
  }, []);

  return (
    <main className='main'>
      <Card />
    </main>    
  )
}

export default CardsContainer;