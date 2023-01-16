import { GetServerSideProps } from 'next';
import { Link } from '@prisma/client';
import axios from 'axios';

import Head from 'next/head';
import MainLayout from 'src/layout/Main';
import useLink from 'src/hooks/useLink';
import BtnSubmit from 'src/components/BtnSubmit';

const Link = ({ data }: { data: Link }) => {
  const { passRef, isLoading, submit } = useLink(data.id);

  return (
    <MainLayout>
      <Head>
        <title>{data.title}</title>
        <meta name='robots' content='noindex, nofollow' />
        <meta name='description' content={data?.desc as string} />
        <meta property='og:title' content={data.title} />
        <meta property='og:description' content={data?.desc as string} />
      </Head>

      <p className='block text-lg font-medium text-gray-700 mb-4'>
        This link has been blocked. Provide the password to be redirected
      </p>
      <form onSubmit={submit}>
        <div>
          <label
            htmlFor='link-password'
            className='block text-base font-medium text-gray-700'
          >
            Password
          </label>
          <input
            required
            ref={passRef}
            type='password'
            autoComplete='off'
            name='link-password'
            id='link-password'
            className='block bg-gray-100 w-full rounded border border-gray-300 text-base py-1 pl-2 pr-12 focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none'
            placeholder='•••••'
          />
        </div>
        <div className='block w-max mx-auto mt-5'>
          <BtnSubmit isLoading={isLoading} text='Confirm' />
        </div>
      </form>
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}api/link/${params!.linkId}`);

    if (data.isBlocked) {
      return {
        props: { data },
      };
    }

    return {
      props: { data },
      redirect: {
        destination: data.link,
        permanent: true,
      },
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};

export default Link;
