import Image from 'next/image';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen relative flex justify-center items-center bg-background'>
      <div className='flex gap-2 items-end absolute top-8'>
        <Image
          src='/images/icon-64x64.png'
          width={64}
          height={64}
          alt='logo'
          quality={100}
          priority={true}
          className='rotate-15'
        />
        <h1 className='text-4xl font-medium font-logo text-indigo-600 tracking-wide'>
          Link Cutter
        </h1>
      </div>
      <div className='w-600 bg-white rounded drop-shadow-md p-4'>{children}</div>
    </div>
  );
};

export default MainLayout;
