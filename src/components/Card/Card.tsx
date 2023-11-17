import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { addCardToCart, toogleTextCard } from '../../store/reducers/CardsSlice';
// import { toogleBtnText } from '../../store/reducers/CardsSlice';
// import { toogleBtnText } from '../../store/reducers/CardSlice';
// import { toggleCard } from '../../store/reducers/CardsSlice';
// import { addCard, removeCard } from '../../store/reducers/CartSlice';

import { toggleCard } from '../../store/reducers/CartSlice';
import { Card } from '../../types/Card';
import './Card.css';

type ProductCardProps = {
  card: Card,
};

const ProductCard = (props: ProductCardProps):JSX.Element => {
  const dispatch = useAppDispatch();

  const {image, name, price, id} = props.card;

  const {items}  = useAppSelector(state => state.cart);

  const isCardAdd = items.some(item => item.id === id)

  const toogleCardState = () => {
    dispatch(toggleCard(props.card))
  }
  
  return (
    <li className='card'>
      <img src={image} alt="" className='card__image'/>
      <span className='card__name'>{name}</span>
      <span className='card__price'>{price.toLocaleString('ru')}</span>
      <button className='card__btn' onClick={toogleCardState}>{isCardAdd ? 'Удалить' : 'Добавить'}</button>  
    </li>
  )
}

export default ProductCard;