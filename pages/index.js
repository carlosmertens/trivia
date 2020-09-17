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
    </PageLayout>
  );
}
