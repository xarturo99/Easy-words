import { WordType } from './../../data/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() title: string;
  words: WordType[] = [];


  @Input() set word(word: WordType) {
    if(word)
    {
      this.words.push(word);
    }
  }

}
