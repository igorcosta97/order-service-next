'use server'
import { cookies } from 'next/headers'

export async function getCookie() {
  const cookie = cookies().get('token')?.value
  if (!cookie) {
    throw new Error('Token not found')
  } else {
    return cookie
  }
}
