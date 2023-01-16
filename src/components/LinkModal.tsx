import { toast } from 'react-toastify';
import MainLayout from 'src/layout/Main';
import CopySvg from 'src/assets/copy.svg';

interface Props {
  linkId: string;
  closeModal: () => void;
}

const LinkModal = ({ linkId, closeModal }: Props) => {
  const newLink = window.location.href + linkId;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(newLink);
    toast.success('Link has been copied');
  };

  return (
    <MainLayout>
      <div>
        <label
          htmlFor='newlink'
          className='block text-base font-medium text-gray-700'
        >
          Success!
        </label>
        <div className='flex gap-2'>
          <p
            id='newlink'
            className='bg-gray-100 w-full rounded border border-gray-300 text-sm py-1 pl-2 pr-12 sm:text-base'
          >
            {newLink.split('//')[1]}
          </p>
          <button
            className='text-gray-700 hover:text-indigo-600 hidden sm:block'
            onClick={handleCopyLink}
          >
            <CopySvg />
          </button>
        </div>
      </div>
      <div className='mt-8 flex justify-between'>
        <button
          className='px-2 py-0.5 bg-indigo-600 text-base text-white rounded'
          onClick={closeModal}
        >
          Voltar
        </button>
        <button
          className='px-2 py-0.5 flex gap-1 text-gray-700 block text-base font-medium rounded hover:text-indigo-600 sm:hidden'
          onClick={handleCopyLink}
        >
          <CopySvg /> Copy link
        </button>
      </div>
    </MainLayout>
  );
};

export default LinkModal;
