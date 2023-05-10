import React from 'react'
import styled from 'styled-components'

// Task :: Props -> React.Component
export default ({
  task,
}) =>
  <Li className="task-item" isDone={task.isDone}>
    <input type="checkbox" defaultChecked={task.isDone} />
    <span>{task.title}</span>
  </Li>

const Li = styled.li`
  span {
    text-decoration: ${props => props.isDone ? "line-through" : "none"};
  }
`
