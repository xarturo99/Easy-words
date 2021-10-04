import { WordType } from './../../data/models';
import { WordsService } from './../../service/words.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {


  word: WordType = null;
  private words = [];
  private subscription: Subscription;
  constructor(private WordsService: WordsService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.WordsService.getWords().subscribe((words: WordType[]) => {
      this.words = words;
      this.fetchWord();
    })
  }

  addToNouns(word: WordType): void {
    this.WordsService.addNoun(word);
    this.fetchWord();
  }

  addToVerbs(word: WordType): void {
    this.WordsService.addVerb(word);
    this.fetchWord();
  }

  private fetchWord(): void {
    this.word = this.words.shift();
  }

}
