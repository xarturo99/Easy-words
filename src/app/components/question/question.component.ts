import { WordType } from './../../data/models';
import { WordsService } from './../../service/words.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  word: WordType = null;
  constructor(private WordsService: WordsService) { }

  ngOnInit(): void {
    this.fetchWord();
  }

  addToNouns(word: WordType): void {
    this.WordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType): void {
    this.WordsService.addVerb(word);
    this.fetchWord();
  }

  check(): void {
    this.WordsService.check();
  }

  private fetchWord(): void {
    this.word = this.WordsService.getWords().shift();
  }

}
