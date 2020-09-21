import { useEffect, useState } from 'react';
import axios from 'axios';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const apiUrl =
      'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
    const fetchData = async () => {
      const response = await axios.get(apiUrl);
      setQuestions(response.data);
    };

    fetchData();
  }, []);

  console.log(questions);

  return (
    <PageLayout>
      <PageHeader>Category: Title</PageHeader>
    </PageLayout>
  );
};

export default Quiz;
