import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, tap} from "rxjs";
import {Lesson} from "../store/models/lesson.model";

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  apiUrl = '/api/getLesson';
  constructor(private http:HttpClient) {}

  getLessin(): Observable<Lesson> {

    return this.http.get<Lesson>(this.apiUrl).pipe(
      tap(x => console.log(x)),
    );

  }
}
