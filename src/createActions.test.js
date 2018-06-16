import { createActions, ACTION_TYPES, defaultTypeFilter } from './createActions'
import { expect } from 'chai'

describe('test of action creators', () => {
  it('increment action', () => {
    const dispatchedType = 'my action type'
    /**
     * typeFilter
     * @param  {string} type filtering type
     * @return {string}      filtered type
     */
    const typeFilter = type => type
    const action = createActions.increment(dispatchedType, typeFilter)
    expect(action.type).to.equal(ACTION_TYPES.INCREMENT)
    expect(action.payload.dispatchedType).to.equal(dispatchedType)
    expect(action.payload.typeFilter).to.equal(typeFilter)
  })

  it('default type filter', () => {
    const action = createActions.increment('test')
    expect(action.payload.typeFilter).to.equal(defaultTypeFilter)
  })
})
