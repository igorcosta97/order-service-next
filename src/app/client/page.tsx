import Image from 'next/image'
import midiaLogo from '../../assets/LogoMidia.svg'
import ListButton from '@/components/ListButton'
import { cookies } from 'next/headers'
import Login from '@/components/Login'
import ListClients from '@/components/ListClients'
import CreateClientForm from '@/components/CreateClientForm'

export default function Client() {
  const isAuthenticated = cookies().get('token')
  return isAuthenticated ? (
    <div className="grid-row-2 grid h-screen w-screen bg-gray-950">
      <div className="flex h-20 w-screen border-separate items-center justify-center bg-[#252c3b]">
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

        <div className="flex-cols-2 flex h-full w-full bg-black">
          <div className="h-screen w-1/3 bg-black">
            <CreateClientForm />
          </div>
          <div className="h-screen w-2/3">
            <ListClients />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  )
}
