import { cookies } from 'next/headers'

import Image from 'next/image'
import Login from '@/components/Login'

import midiaLogo from '../assets/LogoMidia.svg'

import ListButton from '@/components/ListButton'

export default async function App() {
  const isAuthenticated = cookies().get('token')
  return isAuthenticated ? (
    <div className="grid-row-2 grid h-screen w-screen bg-gray-950">
      <div className="flex h-20 w-screen border-separate items-center justify-center bg-[#252c3b] ">
        <div className="">
          <Image
            src={midiaLogo}
            alt="Midia Celulares"
            width={200}
            height={100}
          />
        </div>
        <div />
      </div>
      <div className="flex h-full w-full flex-row bg-[#252c3b] bg-opacity-80">
        <div className="flex h-full w-28 justify-center bg-[#252c3b] ">
          <ListButton />
        </div>

        <div className="grid h-full w-full grid-cols-3 bg-gray-200">
          <div className="flex h-screen bg-black "></div>
          <div className="h-screen bg-black "></div>
          <div className="flex h-screen bg-black"></div>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  )
}
