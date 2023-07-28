'use client'
import { api } from '@/lib/api'
import { getCookie } from '@/utils/getCookie'
import { Edit, Eye, Trash, UserCircle2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import ListClientUnique from './ListClientUnique'

export default function ListClients() {
  interface Cliente {
    id: string
    name: string
    phoneNumber: string
  }

  const [clientList, setClientList] = useState<Cliente[]>([])
  const [inputLabel, setInputLabel] = useState('')
  const [clicked, setClicked] = useState(false)
  const [clientId, setClientId] = useState('')

  useEffect(() => {
    async function getClients() {
      let token = await getCookie()
      token = token.toString()
      console.log(token)
      console.log(inputLabel)
      if (inputLabel === '') {
        const responseClient = await api.get('/client', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setClientList(responseClient.data)
      } else {
        const responseClient = await api.post(
          '/client/name',
          { name: inputLabel },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        setClientList(responseClient.data)
      }
    }
    getClients()
  }, [inputLabel])
  return (
    <div className="grid w-full grid-cols-2 p-2">
      <div className="m-1 flex-row bg-black">
        <div className="">
          <input
            onChange={(event) => setInputLabel(event.currentTarget.value)}
            placeholder="Filtrar por nome"
            className="h-10 w-full rounded-2xl"
          ></input>
        </div>
        {clientList.map((clientList, i) => {
          return (
            <div
              key={`${i}`}
              className="mt-2 flex h-20 w-full items-center justify-between rounded-2xl bg-gray-300 p-8 shadow-2xl hover:bg-gray-400"
            >
              <UserCircle2 className="h-10 w-10 shadow-md" />
              <div className="">
                <h1 className="font-alt">{clientList.name}</h1>
                <span className="font-sans text-sm">
                  {clientList.phoneNumber}
                </span>
              </div>
              <div>
                <button
                  onClick={() => {
                    setClicked(true)
                    setClientId(clientList.id)
                  }}
                >
                  <Eye />
                </button>
              </div>
              <div>
                <Edit />
              </div>
              <div>
                <Trash />
              </div>
            </div>
          )
        })}
      </div>
      <div className="bg-black p-2">
        <ListClientUnique id={clientId} />
      </div>
    </div>
  )
}
