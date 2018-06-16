import { createActions } from './createActions'
import { createMiddleware } from './middleware'
import { expect } from 'chai'
import sinon from 'sinon'

const mockStore = {
  dispatch: sinon.spy(),
}
const nextMiddleware = sinon.spy()

const middleware = createMiddleware()

describe('middleware', () => {
  it('works', () => {
    const action = { type: 'my type' }
    middleware(mockStore)(nextMiddleware)(action)

    expect(mockStore.dispatch.calledWith(createActions.increment(action.type)))
      .to.be.true
    expect(nextMiddleware.calledWith(action)).to.be.true
  })
})
