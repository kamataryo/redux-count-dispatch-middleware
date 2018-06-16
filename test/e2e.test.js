import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createCountDispatchMiddleware, countDispatchReducer } from '../src/'
import { expect } from 'chai'

/**
 * matcher
 * @param  {string} type   type
 * @param  {object} action action
 * @return {string|false}  counter key or false for no count
 */
const filter = type => (type === 'noop' ? false : type + '!')

const initialState = {}

const middlewares = [createCountDispatchMiddleware({ filter })]
const store = createStore(
  combineReducers({
    dispatchCounter: countDispatchReducer,
  }),
  initialState,
  applyMiddleware(...middlewares)
)

store.dispatch({ type: 'hello' })
store.dispatch({ type: 'hello' })
store.dispatch({ type: 'world' })
store.dispatch({ type: 'noop' })

it('work fine', () => {
  expect(store.getState().dispatchCounter['hello!']).to.equal(2)
  expect(store.getState().dispatchCounter['world!']).to.equal(1)
  expect(Object.keys(store.getState().dispatchCounter)).to.deep.equal([
    'hello!',
    'world!',
  ])
})
