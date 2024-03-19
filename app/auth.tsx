'use client'

import { getServerSession } from "next-auth"
import { authOptions } from './api/auth/[...nextauth]/route'

import { signIn, signOut } from "next-auth/react"

export const LoginButton = () => {

    

    return <button onClick={ () => signIn()}>Sign In</button>
}

export const LogoutButton = () => {

    

    return <button onClick={() => signOut()}> Sign Out</button>

}

