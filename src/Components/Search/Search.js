// import React, { useState } from 'react'

function Search(props) {

  return (
    <div className='Search'>
      <form>
        <i className="fas fa-search fa-flip-horizontal"></i>
        <input type='text' onChange={e => props.onSearch(e.target.value)} />
      </form>
    </div>
  )
}

export default Search
