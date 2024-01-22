import { Inter } from 'next/font/google'
import { Indie_Flower } from 'next/font/google'


import style from './finder.module.css'

import Image from 'next/image'
import ndLogo from '../../../public/images/logomini.png'

const inter = Inter({
   weight: '800',
   subsets: ['latin'] });

const indie = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  
})

export default function FinderLayout({ 
    children,
    } : {
    children: React.ReactNode
}) {
    return (
        <>
            <header className={indie.className}>
                <section className={`${style.finderHeader} ${style.logoWrapper} `}>
                <aside >
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
            
            </header>

        {children}
        
        
        </>
    )
}