import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CartPosition from "../CartPosition/CartPosition";
import { countPrice } from "../../store/reducers/CartSlice";
import './CartTable.css';


const CartTable = ():JSX.Element => {

  const itemsArray = useAppSelector(state => state.cart.items);

  const { totalPrice } = useAppSelector(state => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(countPrice())
  },[itemsArray])
  
  return (
    <div className="table-container">

      {itemsArray.length === 0 && <span className="table-container__cart-empty">Корзина еще пуста...</span>}
      
      {itemsArray.length > 0 && 

        <table className="table">
          <thead className="table__header">
            <tr className="table__header-row">
              <th className="table__header-cell">Товар</th>
              <th className="table__header-cell">Цена <span className="table__header-cell-rub">руб</span></th>
              <th className="table__header-cell"></th>
            </tr>
          </thead>
          <tbody className="table__body">
            {
              itemsArray.map((item) => 
              <CartPosition key={item.id} item={item}/>
              ) 
            }

            {itemsArray.length > 0 &&
              <tr className="table__body-total-row">
                <td className="table__body-total-cell">Итого:</td>
                <td className="table__body-total-cell">{totalPrice.toLocaleString('ru')}</td>
              </tr>
            }

          </tbody>
            
        </table>
      }
    </div>

  )
  
}

export default CartTable;