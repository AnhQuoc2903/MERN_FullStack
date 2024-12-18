import React from 'react'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import FooterComponent from '../FooterComponent/FooterComponent'

const DefaultComponet = ({children}) => {
  return (
    <div>
        <HeaderComponent/>
        <main>
        {children}
      </main>
        <FooterComponent/>
    </div>
  )
}

export default DefaultComponet