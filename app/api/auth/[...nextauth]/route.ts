import { prisma } from "@/app/prisma";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { compare } from 'bcrypt'

import credentials from "next-auth/providers/credentials";




export const authOptions: NextAuthOptions = {
    
    callbacks: {
        /*session: ({session, token}) => {
            console.log('Session Callback', {session, token})
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    random: token.random
                    
                }
            }

        },*/
        async jwt({token, user}){
            
            if(user){
                token.id = user.id
                  
            }
            
              
              console.log('JWT callback', {token})
              return token
              
          },

        async session({session, token}){
            
            session.user.id = token.id
            
            console.log('Session Callback', {session, token})
            return session
        }, 
        /*jwt: ({ token, user}) => {
            console.log('JWT callback', {token, user})
            if(user){
                const u = user as unknown as any
                return{
                    ...token,
                    id: u.id,
                    random: u.random
                }
            }
            return token
        }*/
       
    },
    
    session: {
        strategy: 'jwt'
    },
    providers: [
        credentials({
            name: 'Sign-in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials){
                
                if(!credentials?.email || !credentials.password){
                    return null
                }

                const user = await prisma.users.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if(!user){
                    return null
                }

                const passVaild = await compare(credentials.password, user.password)

                if(!passVaild){
                    return null
                }

                return {
                    id: user.id.toString(),
                    email: user.email,
                    name: user.username,
                    
                    
                }

                
            }
        })
    ]
   
}




const handler = NextAuth(authOptions)
export  { handler as GET, handler as POST };