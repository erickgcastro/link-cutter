import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6912083168339143'
          crossOrigin='anonymous'
        ></script>
        <link rel='icon' type='image/png' sizes='32x32' href='/images/icon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/images/icon-16x16.png' />
        <meta name='twitter:card' content='summary'></meta>
        <meta property='og:type' content='article' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
