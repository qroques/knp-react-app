import { combineEpics } from 'redux-observable'
import Task from './Task'

// Epic :: (Observable Action, Observable State) -> Observable Action
export default combineEpics(
  Task,
)
