import { Injectable } from '@angular/core';
import { Question, SubmitAnswer } from '../interfaces/question';
import { Quiz } from '../interfaces/quiz';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private readonly socketService: SocketService) {}

  onConnect() {
    return this.socketService.on('connect');
  }

  onDisconnect() {
    return this.socketService.on('disconnect');
  }

  onPlayerJoined() {
    return this.socketService.on('playerJoined');
  }

  onNextQuestion() {
    return this.socketService.on('nextQuestion');
  }

  onQuizEnded() {
    return this.socketService.on('quizEnded');
  }

  startQuiz(questions: Question[]) {
    return this.socketService.emit('startQuiz', questions);
  }

  nextQuestion(roomId: string) {
    return this.socketService.emit('nextQuestion', {
      roomId,
    });
  }

  joinRoom(quiz: Quiz) {
    return this.socketService.emit('joinRoom', quiz);
  }

  submitAnswer(answer: SubmitAnswer) {
    return this.socketService.emit('submitAnswer', answer);
  }

  getQuiz() {
    return null;
  }
}
