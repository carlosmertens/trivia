import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';
import { ContentContainer } from '../components/ContentContainer';

const Quiz = ({ questions }) => {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [complete, setComplete] = useState(false);
  const router = useRouter();

  const getQuestion = questions.map((question, index) => (
    <div key={index} className='quiz-content'>
      <h2 className='text-xl my-4'>Category:</h2>
      <p>{question.category}</p>
      <h2 className='text-xl my-4'>Question {questionNumber + 1}:</h2>
      <p>{question.question}</p>
    </div>
  ));

  const checkAnswer = (props) => {
    if (props === questions[questionNumber].correct_answer) {
      setScore(score + 1);
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(questionNumber + 1);
      console.log('Wrong');
    }
    if (questionNumber === 9) {
      setComplete(true);
    }
  };

  useEffect(() => {
    if (complete === true) {
      router.push('/results');
    }
  }, [complete]);

  return (
    <PageLayout>
      <PageHeader>Trivia Game</PageHeader>
      <ContentContainer>
        {getQuestion[questionNumber]}
        <div className='m-8'>
          <button
            onClick={() => checkAnswer('True')}
            className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            TRUE
          </button>
          <button
            onClick={() => checkAnswer('False')}
            className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            FALSE
          </button>
        </div>
      </ContentContainer>
      <div>
        <h2>You have {score} of 10 correct</h2>
      </div>
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
