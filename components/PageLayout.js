import Head from 'next/head';

export const PageLayout = ({ children }) => {
  return (
    <div className='min-h-screen grid grid-rows-basic-page bg-blue-100 text-gray-800 text-center'>
      <Head>
        <title>Trivia Game</title>
      </Head>
      <>{children}</>
    </div>
  );
};
