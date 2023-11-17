import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import './ProductCardsContainer.css';
import ProductCard from "../ProductCard/ProductCard";
import { fetchCards } from "../../store/reducers/CardsSlice";


const ProductCardsContainer = ():JSX.Element => {

  const dispatch = useAppDispatch();
  const { cards: {items}, isLoading, error} = useAppSelector(state => state.cards);

  useEffect(() => {    
    dispatch(fetchCards());
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