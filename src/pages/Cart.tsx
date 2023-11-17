import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import CartPosition from "../components/CartPosition/CartPosition";
import { countPrice } from "../store/reducers/CartSlice";


const Cart = ():JSX.Element => {

  const itemsArray = useAppSelector(state => state.cart.items);

  const { totalPrice } = useAppSelector(state => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countPrice())
  },[itemsArray])
  
  return (

    <table>
      <tbody>
        {itemsArray.length > 0 &&
        <tr>
          <th>Товар</th>
          <th>Цена</th>
        </tr>
        }

        { itemsArray.length > 0 ?
          itemsArray.map((item) => 
          <CartPosition key={item.id} item={item}/>
          ) : <tr><td>Корзина еще пуста...</td></tr>
        }

        {itemsArray.length > 0 &&
          <tr>
          <td>Итого: {totalPrice}</td>
        </tr>
        }

      </tbody>
        
    </table>
  )
}

export default Cart;