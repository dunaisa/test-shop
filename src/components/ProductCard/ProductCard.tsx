import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { toggleCard } from '../../store/reducers/CartSlice';
import { Card } from '../../types/Card';
import './ProductCard.css';

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
      <div className='card__btn-сontainer' onClick={toogleCardState}>
        {
          !isCardAdd ? <button className='card__btn'>Добавить в корзину</button> : <Link to='/cart' className='card__btn card__btn_type_link'>Оформить заказ</Link>
        }

      </div>
    </li>
  )
}

export default ProductCard;