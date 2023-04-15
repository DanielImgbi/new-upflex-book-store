import React from 'react';
import './Card.css'
import { BsStar } from 'react-icons/bs';

const Card = ({item, index}) => {
  return (
      <div>
          <div className="shop-item" >
                    <img src='../img/readers.jpg' alt="book" />
                    <div className="book-title"> { item.title}{ index}</div>
                    <div className="stars">
                        <BsStar className='star-icon'/>
                        <BsStar className='star-icon'/>
                        <BsStar className='star-icon' />
                        <BsStar className='star-icon'/>
                        <BsStar className='star-icon'/>
                    </div>
            </div>
        </div>
  )
}

export default Card