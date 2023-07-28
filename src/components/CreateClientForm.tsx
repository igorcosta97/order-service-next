'use client'
import React, { FormEvent, useState } from 'react'
import * as Form from '@radix-ui/react-form'
import { api } from '@/lib/api'
import { getCookie } from '@/utils/getCookie'

export default function CreateClientForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [address, setAddress] = useState('')
  const [district, setDistric] = useState('')
  const [cep, setCep] = useState('')
  const [phone, setPhone] = useState('')

  async function authForm(event: FormEvent) {
    event.preventDefault()

    const token = await getCookie()
    const phoneNumber = phone.toString()
    const responseCreateClient = await api.post(
      '/client',
      {
        name,
        email,
        city,
        uf,
        address,
        district,
        phoneNumber,
        cep,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    const { id } = responseCreateClient.data
    if (id) {
      setName('')
      setEmail('')
      setAddress('')
      setPhone('')
      setCep('')
      setCity('')
      setUf('')
      setDistric('')
    }
  }

  return (
    <Form.Root
      className="w-full gap-4 p-4"
      onSubmit={async (event) => {
        authForm(event)
      }}
    >
      <span className="font-alt text-white">Novo Cliente</span>
      <Form.Field
        className="mb-[10px] mt-4 flex justify-between space-x-2"
        name="name"
      >
        <div className="flex w-20 flex-col items-baseline justify-between">
          <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
            <>Nome:</>
          </Form.Label>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Por favor entre com o seu nome
          </Form.Message>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor entre com um nome válido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            onChange={(event) => setName(event.target.value)}
            value={name}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field
        className="mb-[10px] flex justify-between space-x-2"
        name="name"
      >
        <div className="flex w-20 flex-col items-baseline justify-between">
          <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
            <>Email:</>
          </Form.Label>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe o email
          </Form.Message>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor informe um email válido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
        </Form.Control>
      </Form.Field>
      <div className="flex w-full flex-row">
        <Form.Field className="mb-[10px] flex" name="cidade">
          <div className=" flex w-28 flex-col items-baseline justify-between">
            <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
              <>Cidade:</>
            </Form.Label>
            <Form.Message
              className="text-[9px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Por favor selecione uma Cidade
            </Form.Message>
            <Form.Message
              className="text-[9px] text-white opacity-[0.8]"
              match="typeMismatch"
            >
              Por favor informe um selecione uma cidade
            </Form.Message>
          </div>
          <Form.Control asChild>
            <select
              className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              id="Cidade"
              name="Cidade"
              onChange={(event) => setCity(event.target.value)}
              required
            >
              <option value="">Selecione</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
              <option value="Sabará">Sabará</option>
            </select>
          </Form.Control>
        </Form.Field>
        <Form.Field
          className="mb-[10px] flex justify-between space-x-2"
          name="Estado"
        >
          <div className="ml-2 flex w-12 flex-col items-baseline justify-between">
            <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
              <>UF:</>
            </Form.Label>
            <Form.Message
              className="text-[9px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Por favor selecione um Estado
            </Form.Message>
            <Form.Message
              className="text-[9px] text-white opacity-[0.8]"
              match="typeMismatch"
            >
              Por favor informe um selecione um Estado
            </Form.Message>
          </div>
          <Form.Control asChild>
            <select
              className="selection:color-white box-border inline-flex h-[35px] w-[40px] appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
              id="UF"
              name="UF"
              onChange={(event) => setUf(event.target.value)}
              required
            >
              <option value=""></option>
              <option value="Minas Gerais">MG</option>
            </select>
          </Form.Control>
        </Form.Field>
      </div>
      <Form.Field
        className="mb-[10px] flex justify-between space-x-2"
        name="endereco"
      >
        <div className="flex w-20 flex-col items-baseline justify-between">
          <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
            <>Endereço:</>
          </Form.Label>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe o endereço
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            onChange={(event) => setAddress(event.target.value)}
            value={address}
            required
            type="text"
          />
        </Form.Control>
      </Form.Field>
      <Form.Field
        className="mb-[10px] flex justify-between space-x-2"
        name="bairro"
      >
        <div className="flex w-20 flex-col items-baseline justify-between">
          <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
            <>Bairro:</>
          </Form.Label>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe o bairro
          </Form.Message>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor informe o bairro
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            onChange={(event) => setDistric(event.target.value)}
            value={district}
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field
        className="mb-[10px] flex justify-between space-x-2"
        name="cep"
      >
        <div className="flex w-20 flex-col items-baseline justify-between">
          <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
            <>CEP:</>
          </Form.Label>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Por favor digite um cep
          </Form.Message>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor informe um cep válido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="text"
            onChange={(event) => setCep(event.target.value)}
            value={cep}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field
        className="mb-[10px] flex justify-between space-x-2"
        name="celular"
      >
        <div className="flex w-20 flex-col items-baseline justify-between">
          <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
            <>Celular:</>
          </Form.Label>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe o seu celular
          </Form.Message>
          <Form.Message
            className="text-[9px] text-white opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor informe um celular
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            type="text"
            required
          />
        </Form.Control>
      </Form.Field>

      <Form.Submit asChild>
        <button
          type="submit"
          className="mt-[10px] box-border inline-flex h-[35px] w-full items-center justify-center rounded-[4px] bg-lime-900 px-[15px] font-medium leading-none text-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        >
          Cadastrar
        </button>
      </Form.Submit>
    </Form.Root>
  )
}
