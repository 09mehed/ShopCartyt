import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
  return (
    <SignInButton>
      <button className='text-sm font-semibold hover:text-darkColor hoverEffect hover:cursor-pointer text-lightColor hoverEffect'>
        Log in
      </button>
    </SignInButton>
  )
}

export default SignIn