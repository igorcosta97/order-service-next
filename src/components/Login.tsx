import LoginForm from '@/components/LoginForm'
import Image from 'next/image'
import midiaLogo from '../assets/LogoMidia.svg'
import serviceLogo from '../assets/servicelogo.png'

export default function Login() {
  return (
    <div className="flex h-screen w-screen grid-cols-2 items-center justify-center bg-red-950 ">
      <div className="grid h-screen w-[1000px] grid-flow-col flex-col gap-1 bg-red-950 bg-opacity-90 py-8">
        <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-zinc-900">
          <div className="flex justify-center">
            <Image
              src={midiaLogo}
              alt="Midia Celulares"
              width={300}
              height={100}
            />
          </div>
          <div className="py-4">
            <LoginForm />
          </div>
        </div>
        <div className="flex items-center justify-center opacity-75">
          <div className="blur-sm">
            <Image src={serviceLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
