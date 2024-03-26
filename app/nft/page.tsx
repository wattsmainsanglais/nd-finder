
import { getServerSession } from "next-auth"

import { prisma } from "../prisma"
import { authOptions } from "../api/auth/[...nextauth]/route"



export default async function Page(){
    
    const session = await getServerSession(authOptions)
    //const {data: session, status } = useSession()
   // console.log(session)

    const user = parseInt(session?.user.id)

    const images = await prisma.images.findMany({
       where: {
        user_id: user ? user : 0
       }
    }) 


    return(
        <>
            <p>This will be the nft page and will possibly integrate NMKR for users to mint NFTS</p>
            <p>Welcome {session ? session.user.name: 'Guest'}</p>
         
            <section>
                {session? images.map(d => (
                    <p key={d.id}>{d.species_name}</p>
                )): 'No user session active' }
            </section>
            
        </>
    )
}