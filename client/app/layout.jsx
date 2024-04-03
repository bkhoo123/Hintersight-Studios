import { Inter, Lexend_Deca } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

const Lexend = Lexend_Deca({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
})

export const metadata = {
  title: 'Hinterlight Studios',
  description: 'Hintersight Studios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


// (alias) function Lexend_Deca<T extends `--${string}` = undefined>(options?: {
//   weight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'variable' | Array<'100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'>;
//   style?: 'normal' | Array<'normal'>;
//   display?: Display;
//   variable?: T;
//   preload?: boolean;
//   fallback?: string[];
//   adjustFontFallback?: boolean;
//   subsets?: Array<'latin' | 'latin-ext' | 'vietnamese'>;
// }): T extends undefined ? NextFont : NextFontWithVariable
// import Lexend_Deca