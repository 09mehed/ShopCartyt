import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded } from '@clerk/nextjs'
import { SignedIn, UserButton } from '@clerk/clerk-react'
import SignIn from './SignIn'

const Header = async () => {
  const user = await currentUser();

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
          <ClerkLoaded>
            <SignedIn>
              <UserButton></UserButton>
            </SignedIn>
            {!user && <SignIn></SignIn>}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header