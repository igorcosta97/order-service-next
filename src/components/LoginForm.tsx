'use client'
import React, { FormEvent, useState } from 'react'
import * as Form from '@radix-ui/react-form'
import { KeyRound, UserCircle2 } from 'lucide-react'
import { api } from '@/lib/api'
import { salvarCookies } from '@/utils/saveCookies'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [notToken, setNotToken] = useState(false)

  async function authForm(event: FormEvent) {
    event.preventDefault()
    const responseAuth = await api.post('/auth', {
      username,
      password,
    })
    const { token } = responseAuth.data

    if (token) {
      setNotToken(false)
      salvarCookies(token)
    } else {
      setNotToken(true)
    }
  }

  return (
    <Form.Root
      className="w-[260px]"
      onSubmit={async (event) => {
        authForm(event)
      }}
    >
      <Form.Field className="mb-[10px] grid" name="username">
        <div className="flex items-baseline justify-between">
          <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
            <UserCircle2 />
            <>Usuário</>
          </Form.Label>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Por favor entre com o seu usuário
          </Form.Message>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor entre com um usuário válido
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="mb-[10px] grid" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="flex flex-row items-center gap-3 text-[15px] font-medium leading-[35px] text-white">
            <KeyRound />
            <>Senha</>
          </Form.Label>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Por favor informe sua senha
          </Form.Message>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="typeMismatch"
          >
            Por favor informe uma senha válida
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="selection:color-white box-border inline-flex h-[35px] w-full appearance-none items-center justify-center rounded-[4px] bg-slate-50 px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px]  selection:bg-blackA9 hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Control>
        {notToken && (
          <Form.Message className="py-2 text-[13px] text-white opacity-[0.8]">
            O usuário ou senha informados não correspondem a um usuário
            cadastrado!
          </Form.Message>
        )}
      </Form.Field>
      <Form.Submit asChild>
        <button
          type="submit"
          className="mt-[10px] box-border inline-flex h-[35px] w-full items-center justify-center rounded-[4px] bg-lime-900 px-[15px] font-medium leading-none text-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none"
        >
          Login
        </button>
      </Form.Submit>
    </Form.Root>
  )
}
