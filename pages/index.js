import Link from 'next/link';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';
import { ContentContainer } from '../components/ContentContainer';
import { ContentText } from '../components/ContentText';

export default function Home() {
  return (
    <PageLayout>
      <PageHeader>Welcome to the Trivia Challange!</PageHeader>
      <ContentContainer>
        <ContentText />
      </ContentContainer>
      <div className='flex items-center justify-center'>
        <Link href='/quiz'>
          <a className='w-48 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            Play Now
          </a>
        </Link>
      </div>
    </PageLayout>
  );
}
