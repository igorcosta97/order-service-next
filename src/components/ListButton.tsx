import MenuButton from '@/components/MenuButton'
import { ClipboardEdit, ClipboardList, User } from 'lucide-react'
import Link from 'next/link'
export default function ListButton() {
  return (
    <div className="mt-1 flex w-24 flex-col">
      <Link href="/client">
        <MenuButton value="Criar" icon={<ClipboardEdit />} />
      </Link>
      <form action="/client">
        <button type="submit">
          <MenuButton value="Clientes" icon={<User />} />
        </button>
      </form>
      <MenuButton value="Ordem" icon={<ClipboardList />} />
    </div>
  )
}
