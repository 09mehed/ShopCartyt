import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import SignInButton from './SignInButton'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-b-black/20'>
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
          <SignInButton></SignInButton>
        </div>
      </Container>
    </header>
  )
}

export default Header