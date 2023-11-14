
import { Link } from 'react-router-dom';
import './Header.css';
import CartIcon from '../../images/cart-icon.png';

const Header = ():JSX.Element => {
  return (
    <header className='header'>
      <Link to={'/catalog'} className='header__link'>Каталог</Link>
      <div className='header__counter-container'>
        <div className='header__counter'>0</div>
        <Link to={'/cart'} className='header__link'>
          <img src={CartIcon} alt="Корзина"  className='header__link-icon'/>
        </Link>
      </div>
      
    </header>
  )
}

export default Header;