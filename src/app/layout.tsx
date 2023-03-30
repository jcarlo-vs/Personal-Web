import './globals.css'

export const metadata = {
  title: 'Juan.dev',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/* <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
      /> */}
      <body>{children}</body>
    </html>
  )
}