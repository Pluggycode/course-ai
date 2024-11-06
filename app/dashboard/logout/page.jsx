import React from 'react'
import Logout from '../_components/Logout'
import { SignedIn } from '@clerk/nextjs'
import { SignOutButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className='rounded-lg'>
        <Logout />
        <hr  className='mt-5'/>
        <SignedIn>
            <SignOutButton signOutOptions={{redirectUrl:'/sign-in'}}>
            <div className="flex cursor-pointer gap-2 p-4 justify-center mt-4">
                <Button>Logout</Button>
            </div>
            </SignOutButton>
        </SignedIn>
    </div>
  )
}

export default page