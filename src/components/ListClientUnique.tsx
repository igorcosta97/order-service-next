'use client'
import { api } from '@/lib/api'
import { getCookie } from '@/utils/getCookie'
import { useEffect, useState } from 'react'

interface ClienteId {
  id: string
}

export default function ListClientUnique(props: ClienteId) {
  console.log('Id Cliente' + props.id)
  interface Cliente {
    id: string
    name: string
    phoneNumber: string
    email: string
    address: string
    district: string
    city: string
    cep: string
  }

  const [clientList, setClientList] = useState<Cliente | null>(null)

  useEffect(() => {
    async function getClients() {
      let token = await getCookie()
      token = token.toString()

      const responseClient = await api.get(`/client/${props.id} `, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setClientList(responseClient.data)
    }
    if (props.id) {
      getClients()
    }
  }, [props.id])
  return clientList ? (
    <div className="text-white">
      <div>
        <span>Informações do cliente</span>
      </div>
      <div>
        <span>{clientList.name}</span>
      </div>
      <div>
        <span>{clientList.phoneNumber}</span>
      </div>
      <div>
        <span>{clientList.email}</span>
      </div>
      <div>
        <span>{clientList.address}</span>
      </div>
      <div>
        <span>{clientList.district}</span>
      </div>
      <div>
        <span>{clientList.city}</span>
      </div>
      <div>
        <span>{clientList.cep}</span>
      </div>
    </div>
  ) : (
    <div></div>
  )
}
