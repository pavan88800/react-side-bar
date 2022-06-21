import React from 'react'

const Header = ({ HeaderTitle, HeaderTextSize }) => {
  return (
    <div className='header'>
      <h3 style={{ fontSize: HeaderTextSize }}>{HeaderTitle}</h3>
    </div>
  )
}

export default Header
