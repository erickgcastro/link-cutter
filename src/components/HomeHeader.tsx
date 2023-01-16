import Head from 'next/head';

const HomeHeader = () => {
  return (
    <Head>
      <title>Link Cutter</title>
      <meta name='author' content='Erick Gabriel - erickgcastro.dev@gmail.com' />
      <meta
        name='keywords'
        content='shortener, generator, shorten, link, mask, masker, url, cutter, cut, scissors, free'
      />
      <meta name='description' content='Mask your links or make them smaller free' />
      <meta property='og:title' content='Link Cutter' />
      <meta property='og:description' content='Mask your links or make them smaller' />
    </Head>
  );
};

export default HomeHeader;
