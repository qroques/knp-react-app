import { connect } from 'react-redux'
import { listTasks } from '../../Redux/State/Task'
import { componentDidMount } from 'react-functional-lifecycle'
import { compose } from 'ramda'
import Task from './Task'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  tasks: state.Task.tasks,
  isFetching: state.Task.isFetching,
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  listTasks: compose(dispatch, listTasks),
})

// didMount :: Props -> *
const didMount = ({ listTasks }) => listTasks()

// container :: ReactComponent -> ReactComponent
const container = connect(mapStateToProps, mapDispatchToProps);

// component :: ReactComponent
const component = componentDidMount(didMount)(Task);

// Task :: ReactComponent
export default container(component);
