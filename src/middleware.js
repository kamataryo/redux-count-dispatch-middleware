import { createActions, ACTION_TYPES } from './createActions'

const selfActionTypes = Object.values(ACTION_TYPES)

/**
 * Redux Middleware
 * @param  {Store}      store  Redux store
 * @param  {Middleware} next   next middlwware
 * @param  {Action}     action dispatched action
 * @return {void}
 */

/**
 * create middleware description
 * @param  {object} [configuration={}] configuration
 * @return {function}                  redux middleware
 */
export const createMiddleware = (
  configuration = {}
) => store => next => action => {
  const countAction = createActions.increment(action.type, configuration.filter)
  selfActionTypes.includes(action.type) || store.dispatch(countAction)
  next(action)
}
