

import React from 'react'

import { prisma } from "../prisma";

  export default async function PgData(){
    
  let userlist = await prisma.users.findMany();

        return(
            <>
                <section>
                    {userlist.map(user => (
                  
                    
                    <p key={user.id}>{user.username}</p>
                    
                
                    
                    
                ))}</section>

             
            </>

        )

      

    }
