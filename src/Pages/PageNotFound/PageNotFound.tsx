import { Link, useRouteError } from "react-router-dom";

interface RouterProps {
  statusText: string;
  message: string;
}
export default function ErrorPage() {
  const error = useRouteError() as RouterProps;

  return (
    <div className='bg-white flex items-center justify-center h-screen text-gray-800'>
      <div
        id='error-page'
        className='text-center p-8 bg-gray-100 rounded-lg shadow-lg'
      >
        <h1 className='text-6xl font-bold mb-4 animate-bounce'>Oops!</h1>
        <p className='text-xl mb-4'>Sorry, an unexpected error has occurred.</p>
        <p className='text-lg italic text-gray-600'>
          Page {(error?.statusText as string) || error?.message}
        </p>
        <div className='my-8'>
          <img
            src='https://media.giphy.com/media/7D1uVWH1ZgStm7dhh5/giphy.gif'
            alt='Confused Travolta'
            className='mx-auto w-1/2 rounded-lg shadow-lg'
          />
        </div>
        <Link
          to='/'
          className='mt-8 inline-block px-6 py-3 bg-[#1f394c] hover:bg-[#1f394c] text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-110'
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
