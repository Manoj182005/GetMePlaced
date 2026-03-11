import { getQuestionBank } from "../data/questionBank.js";

export const selectRandomQuestions = (count = 3) => {

  const questions = getQuestionBank();

  const shuffled = questions.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count);
};