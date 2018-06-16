import { reducer } from './reducer'
import { createActions } from './createActions'
import { expect } from 'chai'

describe('reducer', () => {
  it('increment action from zero', () => {
    const action = createActions.increment('my dispatched type')
    const prevState = {}
    const nextState = reducer(prevState, action)
    expect(nextState['my dispatched type']).to.equal(1)
  })

  it('increment action for existing key', () => {
    const action = createActions.increment('my dispatched type')
    const prevState = { 'my dispatched type': 10 }
    const nextState = reducer(prevState, action)
    expect(nextState['my dispatched type']).to.equal(11)
  })
})
