import { Component, OnInit } from '@angular/core';
import {Lesson} from "../../store/models/lesson.model";
import {Store} from "@ngrx/store";
import {addLesson, removeLesson} from 'src/app/store/actions/lesson.action';
import {LessonService} from "../../service/lesson.service";
import {response} from "express";

@Component({
  selector: 'app-lesson-read',
  templateUrl: './lesson-read.component.html',
  styleUrls: ['./lesson-read.component.css']
})
export class LessonReadComponent implements OnInit {

  constructor(private store: Store<Lesson>,private lessonService:LessonService) { }
  lessons: any;
  ngOnInit(): void {
    this.lessonService.getLessin().subscribe((response:any)=>{
      let arr:Lesson[] = response;
      arr.forEach((value, index, array) => {
        const l: Lesson = new Lesson();
        l.id = value.id;
        l.lesson = value.lesson;
        l.explanation = value.explanation;
        this.store.dispatch(addLesson(l));
      })

    })
    this.store.select("lesson").subscribe(lesson => {
      this.lessons = lesson;
    });
  }

  removeLesson(lesson: Lesson) {
    this.store.dispatch(removeLesson(lesson));
  }

}
