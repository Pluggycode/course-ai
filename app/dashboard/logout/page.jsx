import React from 'react'
import Logout from '../_components/Logout'
import { SignedIn } from '@clerk/nextjs'
import { SignOutButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='rounded-lg'>
        <Logout />
    </div>
  )
}

export default page