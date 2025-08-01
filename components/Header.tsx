import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import MobileMenu from './MobileMenu'
import SignIn from './SignIn'

const Header = async () => {
  return (
    <header className='bg-white py-5 '>
      <Container className='flex items-center justify-between text-lightColor'>
        <div className='w-auto md:w-1/3 flex items-center gap-5 justify-start md:gap-0'>
          <MobileMenu></MobileMenu>
          <Logo className=''></Logo>
        </div>
        <HeaderMenu></HeaderMenu>
        <div className='w-auto md:1/3 flex items-center justify-end gap-5'>
          <SearchBar></SearchBar>
          <CartIcon></CartIcon>
          <FavoriteButton></FavoriteButton>
          <SignIn></SignIn>
        </div>
      </Container>
    </header>
  )
}

export default Header