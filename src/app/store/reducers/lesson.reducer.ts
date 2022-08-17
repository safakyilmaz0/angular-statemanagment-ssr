import { createReducer, on } from "@ngrx/store";
import { addLesson, removeLesson } from "../actions/lesson.action";
import {Lesson} from "../models/lesson.model";

//State Type
export interface IState {
  data: Lesson[];
}

//Initial State
export const initialLessonState: IState = {
  data: Array<Lesson>()
}

//Reducer
export const lessonReducer = createReducer(initialLessonState,
  on(addLesson, (state, lesson) => {
    const newState: IState = {
      data: [...state.data, lesson]
    }
    return newState;
  }),
  on(removeLesson, (state, lesson) => {
    const deleteLesson:any = state.data.find(l => l.id == lesson.id);
    const deleteLessonIndexNo = state.data.indexOf(deleteLesson);
    const newState: IState = {
      data: [...state.data]
    };
    newState.data.splice(deleteLessonIndexNo, 1);
    return newState;
  })
);
