import React from 'react';

const BtnSubmit = ({ isLoading, text }: { isLoading: boolean; text: string }) => {
  return (
    <>
      {!isLoading ? (
        <button
          type='submit'
          className='py-1 rounded px-4 bg-indigo-600 text-white text-base font-medium'
        >
          {text}
        </button>
      ) : (
        <p className='py-1 text-gray-700 text-base font-medium'>Loading...</p>
      )}
    </>
  );
};

export default BtnSubmit;
