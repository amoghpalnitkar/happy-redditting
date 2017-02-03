// @flow

import { combineReducers } from 'redux';
import * as subredditReducer from './subreddit'

export default combineReducers(Object.assign(
  subredditReducer,
));
