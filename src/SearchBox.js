import React from 'react'



const SearchBox = ({ onSearchChange }) => {

    return (<input
        type='search'
        placeholder='Type the robot name'
        className='input-reset ba b--black-20 pa2 mb2 w-25 helvetica'
        onChange={onSearchChange}
    />
    )
}


export default SearchBox