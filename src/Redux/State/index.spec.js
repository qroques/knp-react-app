import * as Module from './index'

describe('Redux :: Module', () => {
  it('contains the Task state', () => {
    const state = Module.default();

    expect(state.Task).toBeDefined();
  });
})
