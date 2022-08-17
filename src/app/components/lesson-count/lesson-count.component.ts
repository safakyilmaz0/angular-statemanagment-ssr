import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Lesson} from "../../store/models/lesson.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lesson-count',
  templateUrl: './lesson-count.component.html',
  styleUrls: ['./lesson-count.component.css']
})
export class LessonCountComponent implements OnInit {

  constructor(private store: Store<Lesson>) { }
  lesson: Observable<string> | undefined;
  count: number | undefined;
  ngOnInit(): void {
    this.lesson = this.store.select("lesson");
    this.lesson.subscribe((lessons: any) => this.count = lessons.data.length);
  }

}
