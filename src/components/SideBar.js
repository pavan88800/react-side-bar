import React from 'react'
import Footer from './Footer'
import Header from './Header'

const SideBar = ({
  width,
  backgroundColor,
  TextColor,
  HeaderTitle,
  FooterTitle,
  HeaderTextSize
}) => {
  return (
    <>
      <div
        className='side-bar'
        style={{
          width: width,
          backgroundColor: backgroundColor,
          color: TextColor
        }}
      >
        <Header HeaderTitle={HeaderTitle} HeaderTextSize={HeaderTextSize} />
        <h2>{width}</h2>
        <Footer FooterTitle={FooterTitle} />
      </div>
    </>
  )
}

export default SideBar
