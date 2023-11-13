import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import SessionProvider from './sessionProvider';
import UserProvider from './userProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Send and Receive Payments or Earn Money Providing Support | Monapp',
  description: 'Monapp enables you to easily make and receive payments. Or become a payment broker and earn money while helping people get comfortable with using financial products. Monapp is Transforming Lives, One Transaction at a Time'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Providers>
          <SessionProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </SessionProvider>
        </Providers>

      </body>
    </html>
  )
}
