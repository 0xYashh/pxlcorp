import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  style: ['normal', 'italic'], 
  weight: ['400', '700'],      
})


export const metadata = {
  title: 'pxlcorp - building cool things on internet',
  description: 'A digital lab where we experiment, build, and break things on the internet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bytesized&display=swap" rel="stylesheet" />
      </head>
      <body className={jetbrainsMono.className}>
        {children}
      </body>
    </html>
  )
} 