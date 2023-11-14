import './Card.css';

const Card = ():JSX.Element => {
  return (
    <div className='card'>
      <img src="https://appevent.ru//devtasks//img//catalog_item_5.jpg" alt="" className='card__image'/>
      <span className='card__name'>Название</span>
      <span className='card__price'>Цена</span>      
    </div>
  )
}

export default Card;