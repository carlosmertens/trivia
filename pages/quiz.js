import { useEffect, useState } from 'react';
import axios from 'axios';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

const Quiz = ({ questions }) => {
  return (
    <PageLayout>
      <PageHeader>Trivia Game</PageHeader>
      <>
        {questions.map((question, index) => (
          <div key={index} className='quiz-content'>
            <h2 className='text-xl my-8'>{question.category}</h2>
            <h2 className='text-xl my-8'>{question.question}</h2>
            <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
              TRUE
            </button>
            <button className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
              FALSE
            </button>
          </div>
        ))}
      </>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const apiUrl =
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
  let questions = [];
  try {
    const response = await axios.get(apiUrl);
    questions = response.data.results;
  } catch (e) {
    console.log(e);
  }
  return { props: { questions: questions.slice(0, 10) } };
};

export default Quiz;
