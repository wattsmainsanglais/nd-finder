
import { Indie_Flower } from 'next/font/google'
import {LoginButton, LogoutButton} from '../../auth'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import style from './finder.module.css'

import Image from 'next/image'
import ndLogo from '../../../public/images/logomini.png'




const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  
})

export default async function FinderLayout({ 
    children,
    } : {
    children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)
    return (
        <>
            <header className={`${indie.className} ${style.header}`}>
                <section className={style.finderHeader}>
                <aside className={style.logoWrapper} >
                <Image
                    src={ndLogo}
                    alt='Nature Dopes Logo, mini'
                    style={{  
                    maxWidth: '100%',
                    height: 'auto'
                    }} />
                
                </aside>
                <h2 className={style.navBarHeader}>Nature Dopes</h2>
                </section>
                <pre>{JSON.stringify(session.user)}</pre>   
            </header>

        {children}
        
        
        </>
    )
}