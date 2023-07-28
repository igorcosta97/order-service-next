'use server'
import { cookies } from 'next/headers'

export async function salvarCookies(token: string) {
  cookies().set({
    name: 'token',
    value: token,
    httpOnly: true,
    path: '/',
    maxAge: 259200,
  })
}
