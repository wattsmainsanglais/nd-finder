import { Inter } from 'next/font/google'
import { Indie_Flower } from 'next/font/google'


import style from './finder.module.css'

import Image from 'next/image'
import ndLogo from '../../../public/images/logomini.png'

const inter = Inter({
   weight: '800',
   subsets: ['latin'] });

export const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie'
})

export default function FinderLayout({ 
    children,
    } : {
    children: React.ReactNode
}) {
    return (
        <>
            <header className={style.finderHeader}>
                <section className={`${indie.className} ${style.logoWrapper} `}>
                <aside >
                <Image
                    src={ndLogo}
                    alt='Nature Dopes Logo, mini'
                    style={{  
                    maxWidth: '100%',
                    height: 'auto'
                    }} />
                
                </aside>
                <h2>Nature Dopes</h2>
                </section>
            
            </header>

        {children}
        
        
        </>
    )
}