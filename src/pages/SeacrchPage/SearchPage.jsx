import React from 'react'
import './SearchPage.css';
import Search from '../../components/Search/Search';

const SearchPage = () => {
  return (
    <main className='search-page'>

      <div className="column1">
        <Search />

        <span className="search-history">
          {/* Search history */}
        </span>
        
      </div>

      <div className="column2">
        <h1>No match found</h1>
      </div>

    </main>
  )
}

export default SearchPage