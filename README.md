# redux-count-dispatch-middleware

[![Build Status](https://travis-ci.org/kamataryo/redux-count-dispatch-middleware.svg?branch=master)](https://travis-ci.org/kamataryo/redux-count-dispatch-middleware)
[![Build status](https://ci.appveyor.com/api/projects/status/eocea8d71kqcmrim/branch/master?svg=true)](https://ci.appveyor.com/project/KamataRyo55333/redux-count-dispatch-middleware)
[![codecov](https://codecov.io/gh/kamataryo/redux-count-dispatch-middleware/branch/master/graph/badge.svg)](https://codecov.io/gh/kamataryo/redux-count-dispatch-middleware)
[![runkit](https://img.shields.io/badge/RunKit-Try%20Now%20%E2%96%B6%EF%B8%8F-green.svg)](https://runkit.com/593b1972dbdedb001293ebfe/593b1972dbdedb001293ebff)

[![npm (scoped)](https://img.shields.io/npm/v/redux-count-dispatch-middleware.svg)](https://www.npmjs.com/package/redux-count-dispatch-middleware)
[![downloads](https://img.shields.io/npm/dt/redux-count-dispatch-middleware.svg)](https://www.npmjs.com/package/redux-count-dispatch-middleware)
[![Dependency Status](https://img.shields.io/david/kamataryo/redux-count-dispatch-middleware.svg?style=flat)](https://david-dm.org/kamataryo/redux-count-dispatch-middleware)
[![devDependency Status](https://img.shields.io/david/dev/kamataryo/redux-count-dispatch-middleware.svg?style=flat)](https://david-dm.org/kamataryo/redux-count-dispatch-middleware#info=devDependencies)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Redux middleware to count dispatch.

## install

```shell
$ npm i redux-count-dispatch-middleware -S
# or
$ yarn add redux-count-dispatch-middleware
```

## usage

```javascript
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createCountDispatchMiddleware, dispatchCounterReducer } from 'redux-count-dispatch-middleware'

/**
 * matcher
 * @param  {string} type   type
 * @param  {object} action action
 * @return {string|false}  counter key or not for count(false)
 */
const matcher = (type, action) => type

// redux setup
const initialState = { /* initial state */ }
const reducer = (state = initialState, action) => { /* reducer function logics */ return state }
const middlewares = [createCountDispatchMiddleware(matcher)]
const store = createStore(
  combineReducers({
    dispatchCounter: dispatchCounterReducer,
  }),
  initialState,
  applyMiddleware(...middlewares)
)

store.dispatch({type: 'hello'})
store.dispatch({type: 'hello'})
store.dispatch({type: 'world'})
store.getState()[$count] // { hello: 2, world: 1 }
```

## development

```shell
$ git clone https://github.com/kamataryo/redux-count-dispatch-middleware.git
$ cd redux-count-dispatch-middleware
$ npm test
```
