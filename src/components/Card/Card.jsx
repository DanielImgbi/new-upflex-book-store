import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({item, index}) => {
  return (
      <>
          <div className="shop-item" index={index}>
                    <img src={`${item.image}`} alt="book" />
                    <div className='shop-item-detail'> 
                        <div className="book-title"> { item.title}{ index}</div>
                        <div className="author">{ item.authors}</div>
                        <Link to={`basket/${item.id}`} className='button'>View</Link>
                    </div>
            </div>
        </>
  )
}

export default Card