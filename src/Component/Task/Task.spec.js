import React from 'react'
import Task from './Task'
import TestRenderer from 'react-test-renderer'

describe('Component :: Task :: Task', () => {
  it('loads when no task is present or is fetching', () => {

    const inspector = TestRenderer.create(
      <Task isFetching={null} tasks={null}/>
    );

    inspector.root.findByProps({ className: 'task loader' })

    const inspector2 = TestRenderer.create(
      <Task isFetching={true} tasks={[{title: "First task", isDone: true}, {title: "Second task", isDone: false}]} />
    );

    inspector2.root.findByProps({ className: 'task loader' })
  });
})
