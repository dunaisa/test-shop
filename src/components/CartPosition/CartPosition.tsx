import { Fragment } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { addCardToCart, toogleTextCard } from '../../store/reducers/CardsSlice';
// import { toogleBtnText } from '../../store/reducers/CardsSlice';
// import { toogleBtnText } from '../../store/reducers/CardSlice';
import { deleteCard } from '../../store/reducers/CartSlice';
import { Card } from '../../types/Card';

type CartPositionProps = {
  item: Card,
};

const CartPosition = (props: CartPositionProps):JSX.Element => {

  const { name, price, id} = props.item;

  const dispatch = useAppDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteCard(id))
    // console.log(JSON.parse(localStorage.getItem('cardsItems')))
    
  }

  return (
    <Fragment>
      <tr>
        <td>
          {name}
        </td>
        <td>
          {price.toLocaleString('ru')}
        </td>
        <td>
          <button onClick={handleDeleteItem}>Удалить</button>
        </td>
      </tr>
    </Fragment>
  )
}

export default CartPosition;