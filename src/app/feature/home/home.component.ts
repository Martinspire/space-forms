import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  haveQuiz = false;

  constructor(private readonly quizService: QuizService) {
    const quiz = this.quizService.getQuiz();
    if (quiz) {
      this.haveQuiz = true;
    }
  }

  signUp() {
    // TODO: sign up
  }
}
