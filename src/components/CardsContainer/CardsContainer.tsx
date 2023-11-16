import { useEffect } from "react";
import './CardsContainer.css';
import ProductCard from "../Card/Card";
// import { fetchCards, setTextCard } from "../../store/reducers/CardsSlice";
// import { toogleBtnText } from '../../store/reducers/CardSlice';
import { fetchCards } from "../../store/reducers/CardsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Card } from "../../types/Card";



const ProductCardsContainer = ():JSX.Element => {

  const dispatch = useAppDispatch();
  const { cards: {items}, isLoading, error} = useAppSelector(state => state.cards);
  // const {btnText, isClicked}  = useAppSelector(state => state.card);

  useEffect(() => {    
    dispatch(fetchCards());
    // dispatch(toogleBtnText(isClicked))
  }, []);

  return (
    <ul className='cards'>
      {
        items.map((card) => 
          <ProductCard key={card.id} card={card}/>
        )
      }
      
    </ul>    
  )
}

export default ProductCardsContainer;