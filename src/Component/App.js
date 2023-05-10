import React from 'react'
import { Provider } from 'react-redux'
import Task from './Task'

export default ({
  store,
}) =>
  <Provider store={store}>
    <div>
      <h1>Welcome</h1>
      <p>This is a simple task app bootstrapped with knp-react-app</p>
      <Task />
    </div>
  </Provider>
