import { ACTION_TYPES } from './createActions'

export const initialState = {}

/**
 * reducer
 * @param  {object} state  previous state
 * @param  {object} action redux action
 * @return {object}        next state
 */
export const reducer = (state = initialState, action) => {
  const { type, payload: { dispatchedType, typeFilter } = {} } = action

  switch (type) {
    case ACTION_TYPES.INCREMENT: {
      const key = typeFilter(dispatchedType, action)
      if (key === false) {
        return state
      } else {
        const copied = Object.assign({}, state)
        copied[key] = (state[key] || 0) + 1
        return copied
      }
    }
    default:
      return state
  }
}
