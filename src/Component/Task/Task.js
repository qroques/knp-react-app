import React from 'react'
import TaskItem from './TaskItem/TaskItem'

// Task :: Props -> React.Component
export default ({
  tasks = [],
  isFetching = false,
}) =>
  isFetching || !tasks
    ? <div className="task loader">We are loading your task ...</div>
    : <div className="task">
        <ul>
          {tasks.map((task, index) =>
            <TaskItem key={index} task={task} />
          )}
        </ul>
      </div>
