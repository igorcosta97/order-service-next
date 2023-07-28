import { LucideProps } from 'lucide-react'

interface buttonProps {
  icon: LucideProps
  value: string
}

export default function MenuButton(props: buttonProps) {
  return (
    <div className=" mt-[2px] flex h-24 w-24 flex-col items-center justify-center rounded-lg bg-[#2f384d]  text-white hover:opacity-70">
      <>{props.icon}</>
      <>{props.value}</>
    </div>
  )
}
