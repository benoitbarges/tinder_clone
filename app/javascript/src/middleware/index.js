import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reduxPromise from 'redux-promise';

export default applyMiddleware(
  thunk,
  logger,
  reduxPromise
)
