import useHomeForm from 'src/hooks/useHomeForm';

import BtnSubmit from 'src/components/BtnSubmit';
import HomeHeader from 'src/components/HomeHeader';
import MainLayout from 'src/layout/Main';
import LinkModal from 'src/components/LinkModal';
import EyeSvg from 'src/assets/eye.svg';
import EyeSlashSvg from 'src/assets/eye-slash.svg';

export default function Home() {
  const {
    linkRef,
    passRef,
    toggles,
    newLink,
    isLoading,
    changeToggleByName,
    submit,
    closeModal,
  } = useHomeForm();

  if (newLink)
    return (
      <>
        <HomeHeader />
        <LinkModal linkId={newLink} closeModal={closeModal} />
      </>
    );

  return (
    <MainLayout>
      <HomeHeader />

      <form onSubmit={submit}>
        {/* Link area */}
        <div className='mb-4'>
          <label htmlFor='link' className='block text-base font-medium text-gray-700'>
            Link
          </label>
          <input
            required
            autoComplete='off'
            type='url'
            name='link'
            ref={linkRef}
            id='link'
            className='block bg-gray-100 w-full rounded border border-gray-300 text-base py-1 px-2 focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none'
            placeholder='https://www.example.com/'
          />
        </div>

        {/* Toggle password area */}
        <div className='mb-3 flex gap-10'>
          <div className=' flex items-center gap-2'>
            <input
              type='checkbox'
              name='show-password'
              defaultChecked={toggles.isPassAreaOpen}
              id='show-password'
              autoComplete='off'
              onClick={() => changeToggleByName('isPassAreaOpen')}
              className='w-4 h-4 cursor-pointer accent-indigo-600'
            />
            <label
              htmlFor='show-password'
              className='text-base font-medium  text-gray-700 cursor-pointer'
            >
              Add password
            </label>
          </div>
        </div>

        {/* Password area */}
        {toggles.isPassAreaOpen && (
          <div>
            <label
              htmlFor='link-password'
              className='block text-base font-medium text-gray-700'
            >
              Password
            </label>
            <div className='flex gap-1'>
              <input
                required
                autoComplete='off'
                type={toggles.isShowPassValue ? 'text' : 'password'}
                ref={passRef}
                name='link-password'
                id='link-password'
                className='block bg-gray-100 w-full rounded border border-gray-300 text-base py-1 pl-2 pr-12 focus:border-indigo-600 focus:ring-indigo-600 focus:outline-none'
                placeholder='•••••'
              />
              <button
                type='button'
                className='px-1'
                onClick={() => changeToggleByName('isShowPassValue')}
              >
                {toggles.isShowPassValue ? <EyeSvg /> : <EyeSlashSvg />}
              </button>
            </div>
          </div>
        )}

        {/* Submit */}
        <div className='block w-max mx-auto mt-5'>
          <BtnSubmit isLoading={isLoading} text='Build link' />
        </div>
      </form>
    </MainLayout>
  );
}
