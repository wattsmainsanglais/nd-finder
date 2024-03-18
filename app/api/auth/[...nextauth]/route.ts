import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import { compare } from 'bcrypt'

import credentials from "next-auth/providers/credentials";


const prisma = new PrismaClient()

export const authOptions = NextAuth({
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
                    id: user.id + '',
                    email: user.email,
                    name: user.username
                }

                
            }
        })
    ]
})   


const handler = authOptions
export {handler as GET, handler as POST}