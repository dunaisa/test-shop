import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import './Header.css';
import CartIcon from '../../images/cart-icon.png';

const Header = ():JSX.Element => {

  const { items } = useAppSelector(state => state.cart);

  return (
    <header className='header'>
      <Link to={'/catalog'} className='header__link'>Каталог</Link>
      <div className='header__counter-container'>
        {items.length > 0 && <div className='header__counter'>{`${items.length}`}</div>}
        
        <Link to={'/cart'} className='header__link'>
          <img src={CartIcon} alt="Корзина"  className='header__link-icon'/>
        </Link>
      </div>
      
    </header>
  )
}

export default Header;