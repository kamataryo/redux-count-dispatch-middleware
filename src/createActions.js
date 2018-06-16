/**
 * action type INCREMENT
 * @type {string}
 */
const INCREMENT = '@@redux-count-dispatch-middleware/increment'

/**
 * action types
 * @type {object}
 */
export const ACTION_TYPES = {
  INCREMENT,
}

/**
 * default type filter
 * @param  {string} type filtering type
 * @return {string}      filtered type
 */
export const defaultTypeFilter = type => type

/**
 * action creator
 * @type {object}
 */
export const createActions = {
  /**
   * increment action creator
   * @param  {string}   dispatchedType                 dispatched type
   * @param  {function} [typeFilter=defaultTypeFilter] type filter
   * @return {object}                                  increment action
   */
  increment: (dispatchedType, typeFilter = defaultTypeFilter) => ({
    type: ACTION_TYPES.INCREMENT,
    payload: { dispatchedType, typeFilter },
  }),
}
