'use client'

import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { useSession } from "next-auth/react"

export default async function Page(){
    
 
    const {data: session, status } = useSession()
    console.log(session)
    return(
        <>
            <p>This will be the nft page and will possibly integrate NMKR for users to mint NFTS</p>
            
            <p>{session?.user.email}</p>
        </>
    )
}