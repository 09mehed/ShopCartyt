import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
      <Container>
        <FooterTop></FooterTop>
        <FooterBottom></FooterBottom>
        <div className='py-6 border-t text-center text-sm text-gray-600'>
          <div >
            @ {new Date().getFullYear()} <Logo className='text-sm'></Logo>. All right reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer