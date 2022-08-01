import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="An blog of Articles using Next.js and tailwindcss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      {/* to add public font family */}
      <body className='font-DINNext bg-gray-baby'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}