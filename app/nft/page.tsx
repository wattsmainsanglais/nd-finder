

import { useSession } from "next-auth/react"
import { prisma } from "../prisma"



export default async function Page(){
    
 
    //const {data: session, status } = useSession()
   // console.log(session)

    //const user = session?.user.id

    const images = await prisma.images.findMany({
       
    }) 


    return(
        <>
            <p>This will be the nft page and will possibly integrate NMKR for users to mint NFTS</p>
            
            
            <section>
                {images.map(d => (
                    <p key={d.id}>{d.species_name}</p>
                )) }
            </section>
            
        </>
    )
}