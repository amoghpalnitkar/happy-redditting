//@flow

import createReducer from '../lib/createReducer';

export const fetchedPosts = createReducer({},{
  ['GET_SUBREDDIT_POSTS'](state, action){
    console.log('listening to demo.');
    return Object.assign({}, state, {
              items: action.posts,
              lastUpdated: action.receivedAt,
            });
  }
});
