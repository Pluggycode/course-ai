import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-5 shadow-md overflow-auto'>
       
       <div className="flex gap-2"> <Image src={'/ai1.png'} width={30} height={20} className='border-primary' />
        <h2 className='mt-1 font-bold text-1xl'>Magna-AI</h2>
        </div>
        <div className="w-9 h-9 border-primary border-4 rounded-full justify-center flex">
        <UserButton className='border border-primary rounded px-3 py-1' style={{ border: '1px solid gray', borderRadius: '4px', padding: '0.25rem 0.75rem' }}/>
        </div>
    </div>
    
  )
}

export default Header
