import React, { useState } from 'react'

// styles and icons 
import "./HomeSearchBar.css"
import SearchIcon from '@mui/icons-material/Search';

export default function HomeSearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState('tab1')

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    console.log('Search Query:', searchQuery);
    console.log('Selected tab:', selectedTab);
  }

  const handleTabClick = (tab) => {
    setSelectedTab(tab)
  }

  return (
    <div className='search-container'>
      <div className="filter-sections">
        <button className='search-type btn' onClick={handleTabClick}>Buy</button>
        <button className='search-type btn'>Rent</button>
        <button className='search-type btn'>SXM EDGE</button>

      </div>
      <div className="search">
        <SearchIcon className='search-icon' />
        <input 
          type='text'
          value={searchQuery}
          onChange={handleSearch}
          placeholder='Search...'
        />
        <button onChange={handleSearch} className='btn'>Search</button>
      </div>
    </div>
  )
}

