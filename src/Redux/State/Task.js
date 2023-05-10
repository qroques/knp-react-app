import { always } from 'ramda';
import { createReducer } from '../../Util'

// INITIAL_STATE :: State
export const INITIAL_STATE = {
  isFetching: false,
  tasks: [
    {title: 'Learn React', isDone: false},
    {title: 'Learn Redux', isDone: false},
    {title: 'Bootstrap react app', isDone: true},
  ],
}

export const LIST_TASK = '@knp/Task/List'
export const RETRIEVE_TASK = '@knp/Task/Retrieve'

// listTasks :: () -> Action LIST_TAKS
export const listTasks = always({ type: LIST_TASK });

export const receiveTasks = tasks => ({
  type: RETRIEVE_TASK,
  tasks,
})

// Task :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [LIST_TASK]: state => ({
    tasks: state.tasks,
    isFetching: false,
  }),

  [RETRIEVE_TASK]: (state, { tasks }) => ({
    ...state,
    isFetching: false,
    tasks,
  })
})
