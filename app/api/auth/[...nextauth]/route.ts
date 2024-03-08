import NextAuth from "next-auth";

import credentials from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        credentials({
            name: 'Sign in',
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
                //handle Auth!
                const user = {id: '1', name: 'Andrew', email: 'test@test.com'}
                return user
            }
        })
    ]
})   



export {handler as GET, handler as POST}