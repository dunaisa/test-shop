import { Fragment } from "react";
import { useAppSelector } from "../hooks/redux";
import CartPosition from "../components/CartPosition/CartPosition";


const Cart = ():JSX.Element => {

  const itemsArray = useAppSelector(state => state.cart.items);

  // const itemsArray = localStorage.getItem()
  
  return (

    <table>
      <tbody>
      { itemsArray.length > 0 ?
        itemsArray.map((item) => 
        <CartPosition key={item.id} item={item}/>
         ) : <tr><td>Корзина еще пуста...</td></tr>
      }

      </tbody>

      
        
    </table>
  )
}

export default Cart;