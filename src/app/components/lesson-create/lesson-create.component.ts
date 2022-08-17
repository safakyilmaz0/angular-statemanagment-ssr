import { Component, OnInit } from '@angular/core';
import {addLesson} from "../../store/actions/lesson.action";
import {Store} from "@ngrx/store";
import {Lesson} from "../../store/models/lesson.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css']
})
export class LessonCreateComponent implements OnInit {


  constructor(private store: Store<Lesson>) { }
  lesson: Observable<string> | undefined;
  ngOnInit(): void {
    this.lesson = this.store.select("lesson");
  }

  createLesson(id: string, lesson: string, explanation: string) {
    const l: Lesson = new Lesson();
    l.id = parseInt(id);
    l.explanation = explanation;
    l.lesson = lesson;
    this.store.dispatch(addLesson(l));
  }

}
