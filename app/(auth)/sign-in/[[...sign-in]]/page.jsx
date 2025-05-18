import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    
<div className="m-20 justify-center flex">
  <SignIn redirectUrl='/dashboard' />
</div>
  )
}