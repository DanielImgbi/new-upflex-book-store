import React from 'react';
import './Search.css';
import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div className="search-div">
      <input type="text" placeholder="Type in search product and hit enter" id='search'/>
      <div className="search-category">
          <select name="search-category" id="">
              <option value="all">All</option>
              <option value="Romance">Romance</option>
              <option value="Epic">Epic</option>
              <option value="Fantassy">Fantassy</option>
              <option value="action">Action</option>
              <option value="horror">Horror</option>
              <option value="sci-fi">Sci-fi</option>
          </select>
      </div>
      <span>
          <BsSearch/>
      </span>
    </div>
  )
}

export default Search