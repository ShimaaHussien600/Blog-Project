import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
       {/* to add public font family */}
      <body className='font-DINNext'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}