import type { AppProps } from 'next/app';
import { Rubik_Spray_Paint } from '@next/font/google';
import FirebaseSDK from 'src/lib/firebase';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import '../styles/globals.css';

const RubikSprayPaint = Rubik_Spray_Paint({ weight: ['400'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  FirebaseSDK();
  return (
    <>
      <style jsx global>{`
        :root {
          --rubik-font: ${RubikSprayPaint.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <ToastContainer
        autoClose={2500}
        hideProgressBar={true}
        transition={Flip}
        pauseOnHover={false}
      />
    </>
  );
}
