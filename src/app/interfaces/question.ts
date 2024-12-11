export interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  answer: string;
  correct: boolean;
}

export interface SubmitAnswer {
  roomId: string;
  answer: string;
}
