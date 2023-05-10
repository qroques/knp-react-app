import React from 'react'

// Task :: Props -> React.Component
export default ({
  task,
}) =>
  <li className="task-item">
    <input type="checkbox" defaultChecked={task.isDone} />
    <span>{task.title}</span>
  </li>
