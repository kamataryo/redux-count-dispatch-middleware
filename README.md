# redux-count-dispatch-middleware

[![Build Status](https://travis-ci.org/kamataryo/redux-count-dispatch-middleware.svg?branch=master)](https://travis-ci.org/kamataryo/redux-count-dispatch-middleware)
[![Build status](https://ci.appveyor.com/api/projects/status/yhpc128t9efo5b1k?svg=true)](https://ci.appveyor.com/project/kamataryo/redux-count-dispatch-middleware)

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
import {
  createCountDispatchMiddleware,
  countDispatchReducer,
} from 'redux-count-dispatch-middleware'

/**
 * matcher
 * @param  {string} type   type
 * @param  {object} action action
 * @return {string|false}  counter key or false for no count
 */
const filter = (type, action) =>
  type === 'noop' ? false : 'dispatched ' + type

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
store.getState().dispatchCounter // { 'dispatched hello': 2, 'dispatched world': 1 }
```

## development

```shell
$ git clone https://github.com/kamataryo/redux-count-dispatch-middleware.git
$ cd redux-count-dispatch-middleware
$ npm test
```
