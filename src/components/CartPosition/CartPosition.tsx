import { Fragment } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { CartItem } from '../../types/Cart';
import { deleteCard } from '../../store/reducers/CartSlice';
import './CartPosition.css';

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
      <tr className='table__body-row'>
        <td className='table__body-cell'>
          {name}
        </td>
        <td className='table__body-cell'>
          {price.toLocaleString('ru')}
        </td>
        <td className='table__body-cell'>
          <button onClick={handleDeleteItem} className='table__body-btn'>Удалить</button>
        </td>
      </tr>
      
    </Fragment>
  )
}

export default CartPosition;