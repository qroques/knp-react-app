import { combineEpics, ofType } from 'redux-observable'
import Task from '../Redux/State/Task'
import { mergeMap, map } from 'rxjs/operators'
import { invoker } from 'ramda'

export const fetchTaskEpic = (action$, state$, { fetchTask }) => action$.pipe(
  // TODO: Add a filter to only listen to LIST_TASK actions
)

export default combineEpics(
  fetchTaskEpic,
)
