import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {LessonCountComponent} from "./components/lesson-count/lesson-count.component";
import {LessonCreateComponent} from "./components/lesson-create/lesson-create.component";
import {LessonReadComponent} from "./components/lesson-read/lesson-read.component";
import {lessonReducer} from "./store/reducers/lesson.reducer";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LessonCountComponent,
    LessonCreateComponent,
    LessonReadComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    StoreModule.forRoot({lesson:lessonReducer},{}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
