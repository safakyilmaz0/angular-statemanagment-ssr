import { createAction, props } from "@ngrx/store";
import {Lesson} from "../models/lesson.model";

export const ADD_LESSON = '[ADD LESSON] Lesson';

export const REMOVE_LESSON = '[REMOVE LESSON] Lesson';

export const addLesson = createAction(ADD_LESSON, props<Lesson>());

export const removeLesson = createAction(REMOVE_LESSON, props<Lesson>());
