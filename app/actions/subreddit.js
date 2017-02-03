//@flow

import * as types from '../actions/types';

export const getPostsFromSubreddit = (subreddit : string) => {
  console.log('fetching data from server..' + subreddit);
  return (dispatch,getState) => {
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function receivePosts(subreddit,json){
  console.log(json);
  return {
    type : types.GET_SUBREDDIT_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
