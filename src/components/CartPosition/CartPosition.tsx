import { Fragment, useEffect } from 'react';
import { useAppDispatch} from '../../hooks/redux';
import { CartItem } from '../../types/Cart';
import { deleteCard } from '../../store/reducers/CartSlice';

type CartPositionProps = {
  item: CartItem,
};

const CartPosition = (props: CartPositionProps):JSX.Element => {

  const { name, price, id} = props.item;

  const dispatch = useAppDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteCard(id))    
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